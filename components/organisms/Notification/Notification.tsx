import Link from 'next/link';
import { useNotification } from 'hooks/useNotification';
import { Dropdown, DropdownItem } from 'components';
import NotificationSvg from 'public/image/notification.svg';
import Image from 'next/image';
import { INotification } from 'types/notification';
import * as S from './Notification.styles';
import { translateActionType } from './helper';

interface INotificationMessageProps {
  notification: INotification;
}

function NotificationMessage({ notification }: INotificationMessageProps) {
  return (
    <DropdownItem>
      <Link href="/">
        {/** TODO: span width 제한 props 만들기 */}
        <>
          <span>{notification.nickName}</span>님이{' '}
          <span>{notification.content}을(를) </span>
          {translateActionType(notification.action)}했어요.
        </>
      </Link>
    </DropdownItem>
  );
}

function Notification() {
  const [notifications] = useNotification();
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
          />
        );
      })}
    </Dropdown>
  );
}

export default Notification;
