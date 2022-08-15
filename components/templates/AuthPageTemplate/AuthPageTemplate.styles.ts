import styled from '@emotion/styled';
import { Button } from 'components';

interface IWrapper {
  margin: string;
  padding: string;
}

interface IFlexWrapper extends IWrapper {
  justify: 'center' | 'flex-start' | 'flex-end' | 'between' | 'even' | 'around';
  align: 'center' | 'flex-start' | 'flex-end' | 'stretch';
  flexDirection: 'row-reverse' | 'column' | 'column-reverse';
}

export const Wrapper = styled.div<Partial<IWrapper>>`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

export const FlexWrapper = styled(Wrapper)<Partial<IFlexWrapper>>`
  display: flex;
  flex-direction: ${({ flexDirection = 'row' }) => {
    if (flexDirection === 'row') return 'row';
    if (flexDirection === 'row-reverse') return 'row-reverse';
    if (flexDirection === 'column') return 'column';
    if (flexDirection === 'column-reverse') return 'column-reverse';
    return 'row';
  }};
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
  align-items: ${({ align = 'stretch' }) => {
    if (align === 'center') return 'center';
    if (align === 'flex-start') return 'flex-start';
    if (align === 'flex-end') return 'flex-end';
    return 'stretch';
  }};
`;

export const AuthFlexWrapper = styled(FlexWrapper)`
  gap: 1rem;

  width: 100%;
  height: 12rem;
`;

export const LogoTitle = styled.h1`
  color: ${({ theme }) => theme.colors.pink};
  font-family: 'Noto Serif KR', serif;
  font-size: 2rem;
  font-weight: 900;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 10rem;
  flex-grow: 1;

  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.whiteTransparent};
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
  width: 15rem;
  position: absolute;
  bottom: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
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

export const ErrorMessage = styled.div`
  width: 100%;
  text-align: center;

  color: #f44336;
  font-size: 0.7rem;
  text-align: center;
`;
