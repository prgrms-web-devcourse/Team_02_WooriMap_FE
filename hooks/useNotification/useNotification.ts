import { useSSE } from 'hooks/useSSE';
import { useCallback, useEffect, useState } from 'react';
import { INotification, NotificationResponseType } from 'types/notification';
import { IApiResponse } from 'types/api';
import { useAxiosInstance } from 'hooks';

type ReturnTypes = [INotification[], (notificationId: number) => void];

function useNotification(): ReturnTypes {
  const source = useSSE();
  const instance = useAxiosInstance(
    process.env.NEXT_PUBLIC_NOTIFICATION_API_URL,
  );
  const [notifications, setNotifications] = useState<INotification[]>([]);

  // ANCHOR: 읽지 않은 알림을 받아온다.
  const getUnReadNotifications = useCallback(async () => {
    try {
      const unReadNotifications = await instance
        .get<IApiResponse<NotificationResponseType[]>>('/notifications')
        .then((response) => response.data.data);

      setNotifications(
        unReadNotifications.map((notification) => ({
          ...notification,
          isRead: false,
        })),
      );
    } catch {
      console.error(
        '현재 알림을 불러올 수 없습니다. 새로고침하여 다시 불러오기를 시도하세요.',
      );
    }
  }, [instance]);

  // ANCHOR: 서버에서 읽음 처리
  const onRead = useCallback(
    async (notificationId: number) => {
      try {
        await instance.patch(`/notifications/${notificationId}`);
      } catch {
        console.error(
          '서버 문제로 알림을 읽음 처리 하지 못했습니다. 다음에 다시 시도하세요.',
        );
      }
    },
    [instance],
  );

  // 읽음 처리
  const readNotification = useCallback(
    async (notificationId: number) => {
      setNotifications((prev) =>
        prev.map((notification) =>
          notification.id === notificationId
            ? { ...notification, isRead: true }
            : notification,
        ),
      );

      await onRead(notificationId);
    },
    [onRead],
  );

  /**
   * initial load시 알림을 받아오는 부분
   */
  useEffect(() => {
    getUnReadNotifications();
  }, [getUnReadNotifications]);

  /**
   * 알림 이벤트 수신 부분
   * NOTE: 알림 id가 중첩될 수 있으므로, 해당 현상 발생시, 이 부분을 확인할 것
   */
  useEffect(() => {
    if (!source) return;

    source.addEventListener('sse', (e) => {
      try {
        const data = JSON.parse(e.data) as NotificationResponseType;
        setNotifications((prev) => [{ ...data, isRead: false }, ...prev]);
      } catch {
        // do nothing
      }
    });
  }, [source]);

  return [notifications, readNotification];
}

export default useNotification;
