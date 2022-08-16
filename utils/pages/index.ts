// index.ts helper
export function getTagIdQuery(tagIds: (number | undefined)[]) {
  return tagIds.length
    ? `tagIds=${tagIds.map((tagId) => `${tagId},`.slice(0, -1))}`
    : '';
}

export function getTitleQuery(title: string) {
  return title ? `&title=${title}` : '';
}

export function getLastIdQuery(postId: number) {
  return postId ? `&lastPostId=${postId}` : '';
}
