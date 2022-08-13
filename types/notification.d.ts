export interface INotification {
  id: number;
  contentId: number;
  nickName: string;
  action: 'created' | 'modified';
  content: string;
  isRead: boolean;
}

export type NotificationResponseType = Omit<INotification, 'isRead'>;
