import { nanoid } from 'nanoid';

const temp: Array<Itemp> = [
  {
    id: nanoid(),
    text: '제목',
    name: 'title',
    variant: 'input',
  },
  {
    id: nanoid(),
    text: '날짜',
    name: 'date',
    variant: 'calendar',
  },
  {
    id: nanoid(),
    text: '내용',
    name: 'content',
    variant: 'textarea',
  },
];
