import { IUserResponse } from 'types/auth';

export function validateUser(data: unknown): data is IUserResponse {
  if (typeof data !== 'object') return false;
  if (data === null) return false;
  const keys = ['email', 'imageUrl', 'nickName', 'isCouple'];
  return keys.every((key) => Object.prototype.hasOwnProperty.call(data, key));
}
