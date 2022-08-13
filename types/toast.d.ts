export interface IToast {
  key: string;
  status: 'success' | 'error';
  message: string;
  duration: number;
}
