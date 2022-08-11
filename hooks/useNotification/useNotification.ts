import { useSSE } from 'hooks/useSSE';
import { useEffect } from 'react';
import { INotification } from 'types/notification';

// TODO: dummydata 지울 것
const dummyData: INotification[] = [
  {
    id: 1,
    articleId: 1,
    action: 'created',
    nickName: 'yummy',
    content: 'article 제목1',
    isRead: false,
  },
  {
    id: 2,
    articleId: 2,
    action: 'created',
    nickName: 'yummy',
    content: 'article 제목2',
    isRead: false,
  },
  {
    id: 3,
    articleId: 3,
    action: 'modified',
    nickName: 'yummy',
    content: 'article 제목3',
    isRead: false,
  },
  {
    id: 4,
    articleId: 4,
    action: 'modified',
    nickName: 'yummy',
    content: 'article 제목4',
    isRead: false,
  },
  {
    id: 5,
    articleId: 5,
    action: 'modified',
    nickName: 'yummy',
    content: 'article 제목5',
    isRead: false,
  },
  {
    id: 6,
    articleId: 6,
    action: 'created',
    nickName: 'yummy',
    content: 'article 제목6',
    isRead: false,
  },
];

function useNotification() {
  const source = useSSE();

  // event 받는 부분
  useEffect(() => {
    if (!source) return;

    source.addEventListener('open', (e) => {
      console.log('opened!!', e);
    });

    source.addEventListener('test', (e) => {
      console.log('test:', e);
    });

    source.addEventListener('message', (e) => {
      console.log('message');
      console.log(e);
    });

    source.addEventListener('error', () => {
      console.log('error');
    });
  }, [source]);

  // api 처리 부분
}

export default useNotification;
