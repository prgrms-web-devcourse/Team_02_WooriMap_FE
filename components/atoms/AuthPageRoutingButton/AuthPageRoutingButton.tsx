import Link from 'next/link';
import * as S from './AuthPageRouting.styles';

interface IAuthPageRoutingButtonProps {
  type: 'signup' | 'signin';
}

export function AuthPageRoutingButton({ type }: IAuthPageRoutingButtonProps) {
  const { text, path, link } =
    type === 'signup'
      ? {
          text: '이미 회원이신가요?',
          path: '/auth/signin',
          link: '로그인',
        }
      : {
          text: '회원이 아니신가요?',
          path: '/auth/signup',
          link: '회원 가입',
        };

  return (
    <S.Container>
      {text}
      <Link href={path}>{link}</Link>
    </S.Container>
  );
}
