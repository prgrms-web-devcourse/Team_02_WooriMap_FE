// ANCHOR: 액션 타입을 한글로 변환하는 함수
export function translateActionType(
  actionType: 'POST_CREATED' | 'POST_MODIFIED',
) {
  return actionType === 'POST_CREATED' ? '생성' : '수정';
}

export function changeToEllipsis(word: string, length: number) {
  if (length < 0) return word;

  const trimmed = word.replace(/\n+/g, ' ').slice(0, length);
  return word.slice(length) ? trimmed.concat('...') : trimmed;
}
