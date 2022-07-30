import { IImageSource } from 'types';
import { ImageBox } from 'components';
import * as S from './ImageList.styles';

interface IImageListProps {
  size: string;
  sources: Array<IImageSource>;
  onClick: (key: string) => void;
}

export function ImageList({ size, sources, onClick }: IImageListProps) {
  return (
    <S.Container>
      {sources.map(({ key, src, isSelected }: IImageSource) => (
        <ImageBox
          key={key}
          size={size}
          src={src}
          isSelected={isSelected}
          onClick={() => onClick(key)}
        />
      ))}
    </S.Container>
  );
}
