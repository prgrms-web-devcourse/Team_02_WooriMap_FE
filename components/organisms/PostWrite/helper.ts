import { nanoid } from 'nanoid';

interface IInputList {
  id: string;
  text: string;
  name: string;
  variant: 'input' | 'calendar' | 'textarea' | 'tag';
  placeholder?: string;
}

export const inputList: Array<IInputList> = [
  {
    id: nanoid(),
    text: '제목',
    name: 'title',
    variant: 'input',
    placeholder: '제목을 입력해주세요',
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
    placeholder: '우리의 이야기를 입력해주세요',
  },
];
