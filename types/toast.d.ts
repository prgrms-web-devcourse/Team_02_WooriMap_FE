export interface IToast {
  key: string;
  status: 'success' | 'fail';
  message: string;
  duration: number;
}
