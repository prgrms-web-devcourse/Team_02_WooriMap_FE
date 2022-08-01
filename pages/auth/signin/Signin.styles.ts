import styled from '@emotion/styled';

interface IWrapper {
  padding: string;
}

interface IFlexWrapper extends IWrapper {
  justify: 'center' | 'flex-start' | 'flex-end' | 'between' | 'even' | 'around';
  align: 'center' | 'flex-start' | 'flex-end' | 'stretch';
}

export const Wrapper = styled.div``;

export const FlexWrapper = styled.div<Partial<IFlexWrapper>>`
  display: flex;
  justify-content: ${({ justify = 'flex-start' }) => {
    if (justify === 'center') return 'center';
    if (justify === 'around') return 'space-around';
    if (justify === 'between') return 'space-between';
    if (justify === 'even') return 'space-evenly';
    if (justify === 'flex-start') return 'flex-start';
    if (justify === 'flex-end') return 'flex-end';
    if (justify === 'around') return 'space-around';
    return 'flex-start';
  }};
  algin-items: ${({ align = 'stretch' }) => {
    if (align === 'center') return 'center';
    if (align === 'flex-start') return 'flex-start';
    if (align === 'flex-end') return 'flex-end';
    return 'stretch';
  }};
`;

export const LogoWrapper = styled(FlexWrapper)`
  padding: 2rem;
`;

export const InputWrapper = styled(FlexWrapper)`
  + div {
    margin: 2rem;
  }
`;
