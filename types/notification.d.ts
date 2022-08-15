export interface INotification {
  id: number;
  contentId: number;
  nickName: string;
  type: 'POST_CREATED' | 'POST_MODIFIED';
  content: string;
  isRead: boolean;
}

export type NotificationResponseType = Omit<INotification, 'isRead'>;
