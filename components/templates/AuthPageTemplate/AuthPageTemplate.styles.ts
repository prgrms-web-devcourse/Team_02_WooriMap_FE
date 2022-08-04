import styled from '@emotion/styled';

interface IWrapper {
  margin: string;
  padding: string;
}

interface IFlexWrapper extends IWrapper {
  justify: 'center' | 'flex-start' | 'flex-end' | 'between' | 'even' | 'around';
  align: 'center' | 'flex-start' | 'flex-end' | 'stretch';
}

export const Wrapper = styled.div<Partial<IWrapper>>`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

export const FlexWrapper = styled(Wrapper)<Partial<IFlexWrapper>>`
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

export const InputWrapper = styled(Wrapper)`
  div {
    margin: 2rem 0;

    :first-of-type {
      margin-top: 0;
    }

    :last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const FooterWrapper = styled(Wrapper)`
  button {
    display: block;
    width: 100%;
  }

  p {
    margin: 1rem 0;
    text-align: center;
  }
`;

export const InfoMessageWrapper = styled.div`
  p {
    color: #d9d9d9;
  }
  a {
    color: #ff8f8f;
  }
`;
