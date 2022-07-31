import { IImageSource } from 'types';
import { ImageBox, DeleteBox } from 'components';
import * as S from './ImageList.styles';

interface IImageListProps {
  type: 'read' | 'upload';
  size: 'small' | 'medium' | 'large';
  sources: Array<IImageSource> | Array<Omit<IImageSource, 'isSelected'>>;
  onClick: (key: string) => void;
}

export function ImageList({ type, size, sources, onClick }: IImageListProps) {
  return (
    <S.Container>
      {sources.map(({ key, src, isSelected }: IImageSource) =>
        type === 'read' ? (
          <ImageBox
            key={key}
            size={size}
            src={src}
            isSelected={isSelected}
            onClick={() => onClick(key)}
          />
        ) : (
          <DeleteBox
            key={key}
            size={size}
            src={src}
            onClick={() => onClick(key)}
          />
        ),
      )}
    </S.Container>
  );
}
