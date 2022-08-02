import * as S from './SubmitButton.styles';

export function SubmitButton({ text }: { text: string }) {
  return <S.SubmitButton type="submit" value={text} />;
}
