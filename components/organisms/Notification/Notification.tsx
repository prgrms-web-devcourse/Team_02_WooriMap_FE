import { useNotification } from 'hooks/useNotification';
import { Dropdown, DropdownItem } from 'components';
import NotificationSvg from 'public/image/notification.svg';
import Image from 'next/image';
import * as S from './Notification.styles';

function Notification() {
  const [notifications, readNotification] = useNotification();
  return (
    <Dropdown
      trigger={
        <S.NotificationIcon>
          <Image
            src={NotificationSvg}
            alt="notification"
            width={24}
            height={24}
          />
        </S.NotificationIcon>
      }
    >
      {notifications.map((notification) => {
        return (
          <DropdownItem
            key={notification.id}
            onClick={() => readNotification(notification.id)}
          >
            {notification.articleId} {notification.action}{' '}
            {notification.nickName} {notification.content}{' '}
            {String(notification.isRead)}
          </DropdownItem>
        );
      })}
    </Dropdown>
  );
}

export default Notification;
