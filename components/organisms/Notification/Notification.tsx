import { LiHTMLAttributes } from 'react';
import Link from 'next/link';
import { useNotification } from 'hooks/useNotification';
import { Dropdown } from 'components';
import NotificationSvg from 'public/image/notification.svg';
import Image from 'next/image';
import { INotification } from 'types/notification';
import * as S from './Notification.styles';
import { translateActionType, trimWord } from './helper';

interface INotificationMessageProps extends LiHTMLAttributes<HTMLLIElement> {
  notification: INotification;
}

function NotificationMessage({
  notification,
  ...props
}: INotificationMessageProps) {
  return (
    <S.NotificationMessage {...props}>
      <Link href="/">
        {/** TODO: span width 제한 props 만들기 */}
        <>
          <S.StrongAndEllipsis>
            {trimWord(notification.nickName, 8)}
          </S.StrongAndEllipsis>
          님이{' '}
          <S.StrongAndEllipsis>
            {trimWord(notification.content, 14)}
          </S.StrongAndEllipsis>
          을(를) {translateActionType(notification.action)}했어요.
        </>
      </Link>
    </S.NotificationMessage>
  );
}

function Notification() {
  const [notifications, readNotification] = useNotification();
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
            }}
          />
        );
      })}
    </Dropdown>
  );
}

export default Notification;
