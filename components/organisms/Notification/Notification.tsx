import { LiHTMLAttributes, useCallback } from 'react';
import { useNotification } from 'hooks/useNotification';
import { Dropdown } from 'components';
import NotificationSvg from 'public/image/notification.svg';
import Image from 'next/image';
import { INotification } from 'types/notification';
import { useRouter } from 'next/router';
import * as S from './Notification.styles';
import { translateActionType, changeToEllipsis } from './helper';

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
      을(를) {translateActionType(notification.action)}했어요.
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
        <S.NotificationIcon>
          <Image
            src={NotificationSvg}
            alt="notification"
            width={48}
            height={48}
          />
        </S.NotificationIcon>
      }
    >
      {notifications.map((notification) => {
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
      })}
    </Dropdown>
  );
}

export default Notification;
