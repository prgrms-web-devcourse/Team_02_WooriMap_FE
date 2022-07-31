import { Cookies } from 'react-cookie';
import { CookieSetOptions } from 'universal-cookie';

const cookies = new Cookies();

export function setCookie<T = unknown>(
  name: string,
  value: T,
  option?: CookieSetOptions,
) {
  cookies.set(name, value, { ...option });
}

export function getCookie(name: string) {
  return cookies.get(name);
}

export function removeCookie(name: string) {
  cookies.remove(name);
}
