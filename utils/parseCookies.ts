interface ICookie {
  [key: string]: string;
}

export const parseCookises = ({ cookieString }: { cookieString: string }) => {
  return cookieString
    .split(';')
    .map((cookie: string) => cookie.split('=') as [string, string])
    .reduce((acc: ICookie, [key, value]: [string, string]) => {
      acc[key.trim()] = decodeURIComponent(value);
      return acc;
    }, {});
};
