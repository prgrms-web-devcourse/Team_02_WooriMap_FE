import * as S from './Submit.styles';

export function SubmitButton({ text }: { text: string }) {
  return <S.SubmitButton type="submit" value={text} />;
}
