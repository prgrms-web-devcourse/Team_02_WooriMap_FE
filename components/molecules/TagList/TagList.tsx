import { Tag } from 'components';
import styled from '@emotion/styled';
import { useState } from 'react';

interface ITag {
  value: string;
  tagColor: string;
}

export interface ITagListProp {
  tagList: ITag[];
  deletable?: boolean;
}

const Container = styled.div`
  display: inline-flex;
`;

const PaddedTag = styled(Tag)`
  margin: 0px 16px;
`;

export function TagList({ tagList, deletable }: ITagListProp) {
  const [list, setList] = useState<ITag[]>(tagList);
  const handleDelete = (tagValue: string) => () => {
    const newList: ITag[] = [...list].filter(({ value }) => value !== tagValue);
    setList(newList);
  };

  return (
    <Container>
      {list.map(({ value, tagColor }) => (
        <PaddedTag
          key={value}
          value={value}
          tagColor={tagColor}
          onDelete={deletable ? handleDelete(value) : undefined}
        />
      ))}
    </Container>
  );
}
