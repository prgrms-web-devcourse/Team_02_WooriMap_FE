export interface INotification {
  id: number;
  articleId: number;
  nickName: string;
  action: 'modified' | 'created';
  content: string;
  isRead: boolean;
}

export type NotificationResponseType = Pick<
  INotification,
  'id' | 'articleId' | 'action' | 'content' | 'nickName'
>;
