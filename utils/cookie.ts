import { Cookies } from 'react-cookie';
import { CookieSetOptions } from 'universal-cookie';

const cookies = new Cookies();

export function setCookie<T = unknown>(
  name: string,
  value: T,
  option?: CookieSetOptions,
) {
  cookies.set(name, value, { ...option, path: '/' });
}

export function getCookie<T = unknown>(name: string) {
  return cookies.get(name) as T;
}

export function removeCookie(name: string) {
  cookies.remove(name);
}
