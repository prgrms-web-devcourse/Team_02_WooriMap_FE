import { useSSE } from 'hooks/useSSE';
import { useCallback, useEffect, useState } from 'react';
import { INotification } from 'types/notification';

// TODO: dummydata 지울 것
const dummyData: INotification[] = [
  {
    id: 1,
    contentId: 1,
    action: 'created',
    nickName: 'yummyyummyyummy',
    content: 'article 제목1',
    isRead: false,
  },
  {
    id: 2,
    contentId: 2,
    action: 'created',
    nickName: 'yummy',
    content: 'article 제목2',
    isRead: false,
  },
  {
    id: 3,
    contentId: 3,
    action: 'modified',
    nickName: 'yummy',
    content: 'article 제목3',
    isRead: false,
  },
  {
    id: 4,
    contentId: 4,
    action: 'modified',
    nickName: 'yummy',
    content: 'article 제목4',
    isRead: false,
  },
  {
    id: 5,
    contentId: 5,
    action: 'modified',
    nickName: 'yummy',
    content: 'article 제목5',
    isRead: false,
  },
  {
    id: 6,
    contentId: 6,
    action: 'created',
    nickName: 'yummy',
    content: 'article 제목6',
    isRead: false,
  },
];

type ReturnTypes = [INotification[], (notificationId: number) => void];

function useNotification(): ReturnTypes {
  const source = useSSE();
  const [notifications, setNotifications] =
    useState<INotification[]>(dummyData);

  /**
   * 알림 이벤트 수신 부분
   * TODO: 알림 받을 시, setNotification으로 가장 위에 배치할 것
   */
  useEffect(() => {
    if (!source) return;

    source.addEventListener('open', (e) => {
      console.log('opened!!', e);
    });

    source.addEventListener('test', (e) => {
      console.log('test:', e);
    });

    source.addEventListener('message', (e) => {
      console.log('message');
      console.log(e);
    });

    source.addEventListener('error', () => {
      console.log('error');
    });
  }, [source]);

  /**
   * TODO: useEffect로 처음 읽지 않음 알림을 받아오는 처리 실행
   */

  /**
   * 읽음 처리
   * TODO: API를 연결하여 서버에서도 읽음 처리를 할 수 있도록 해야 함
   */
  const readNotification = useCallback(
    (notificationId: number) =>
      setNotifications((prev) =>
        prev.map((notification) =>
          notification.id === notificationId
            ? { ...notification, isRead: true }
            : notification,
        ),
      ),
    [],
  );

  return [notifications, readNotification];
}

export default useNotification;
