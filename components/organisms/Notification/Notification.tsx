import { LiHTMLAttributes, useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Dropdown, IconWrapper } from 'components';
import { useNotification } from 'hooks';
import { INotification } from 'types/notification';
import NotificationSvg from 'public/image/notification.svg';
import { changeToEllipsis, translateActionType } from './helper';
import * as S from './Notification.styles';

interface INotificationMessageProps extends LiHTMLAttributes<HTMLLIElement> {
  notification: INotification;
}

function NotificationMessage({
  notification,
  ...props
}: INotificationMessageProps) {
  return (
    <S.NotificationMessage {...props} isRead={notification.isRead}>
      <S.StrongAndEllipsis>
        {changeToEllipsis(notification.nickName, 8)}
      </S.StrongAndEllipsis>
      님이{' '}
      <S.StrongAndEllipsis>
        {changeToEllipsis(notification.content, 14)}
      </S.StrongAndEllipsis>
      을(를) {translateActionType(notification.type)}했어요.
    </S.NotificationMessage>
  );
}

function DefaultMessage() {
  return (
    <S.NotificationMessage isRead>
      모든 알림을 확인했어요.
    </S.NotificationMessage>
  );
}

function Notification() {
  const [notifications, readNotification] = useNotification();
  const router = useRouter();

  const moveTo = useCallback(
    (contentId: number) => {
      router.push(`/post/${contentId}`);
    },
    [router],
  );

  return (
    <Dropdown
      trigger={
        <IconWrapper>
          <Image
            src={NotificationSvg}
            alt="notification"
            width={40}
            height={40}
          />
        </IconWrapper>
      }
    >
      {notifications.length > 0 ? (
        notifications.map((notification) => {
          return (
            <NotificationMessage
              key={notification.id}
              notification={notification}
              onClick={() => {
                readNotification(notification.id);
                moveTo(notification.contentId);
              }}
            />
          );
        })
      ) : (
        <DefaultMessage />
      )}
    </Dropdown>
  );
}

export default Notification;
