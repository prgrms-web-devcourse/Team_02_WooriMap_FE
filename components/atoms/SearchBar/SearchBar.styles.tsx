import styled from '@emotion/styled';

export const Container = styled.div<{ isSearching: boolean }>`
  position: relative;

  width: 392px;
  height: 48px;
  padding: 12px 16px 11px 16px;
  background-color: #fff;

  border: 1px solid #e6e6e6;
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 2px,
    rgba(60, 64, 67, 0.15) 0 2px 6px 2px;
  border-bottom: 1px solid transparent;
  border-radius: ${({ isSearching }) => (isSearching ? '8px 8px 0 0' : '8px')};
  z-index: 1;
  box-sizing: border-box;

  transition-duration: 0.3s;
  transition-property: background, box-shadow;
`;

export const Input = styled.input`
  margin: 0;

  font-family: inherit;
  font-weight: inherit;
  list-style: none;

  background-color: transparent;
  border-radius: 0;
  border-style: initial;
  border-width: 0;
  outline: 0;

  overflow: visible;
`;

export const SearchResultBox = styled.ul`
  background-color: #fff;
  border-radius: 0 0 8px 8px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 2px 4px;
  font-size: 15px;
  overflow: hidden;
  padding: 8px 0;
  width: 392px;
  height: 300px;

  /* left: 0;
  bottom: 100px; */

  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }
`;

/* ".inherited-styles-for-exported-element" is a generated class for the inherited styles of the exported element, feel free to rename it. */

// ::-webkit-input-placeholder {
//     color: #999;
//   }

//   .inherited-styles-for-exported-element {
//     white-space: normal;
//   }

//   [dir=ltr] {
//     unicode-bidi: isolate;
//   }

//   .DAdBuc {
//     background-color: #fff;
//     border-radius: 0 0 8px 8px;
//     box-shadow: rgba(0, 0, 0, .2) 0 2px 4px;
//     font-size: 15px;
//     overflow: hidden;
//     padding: 8px 0;
//     width: 392px;
//   }

//   @media only screen and (max-width: 408px) {
//     .DAdBuc {
//       width: calc(100% - 16px);
//     }
//   }

//   .ZHeE1b {
//     border-style: none;
//     color: #8c8c8c;
//     cursor: pointer;
//     direction: ltr;
//     font-size: 12px;
//     min-height: 24px;
//     padding-bottom: 7px;
//     padding-top: 6px;
//     position: relative;
//     text-align: left;
//   }

//   .j2RmEf {
//     line-height: 24px;
//   }

//   .l0wghb {
//     display: flex;
//     padding-right: 13px;
//   }

//   .DgCNMb {
//     -webkit-box-flex: 1;
//     flex: 1 1 0;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     white-space: nowrap;
//   }

//   .hCgzhd {
//     float: left;
//     height: 20px;
//     margin: 2px 26px 0 18px;
//     width: 20px;
//   }

//   .b9DfJb {
//     color: #3c4043;
//     font-size: 13px;
//   }

//   .EmLCAe {
//     color: #70757a;
//   }

//   :focus {
//     outline: 0;
//   }

//   .DgCNMb span {
//     unicode-bidi: normal;
//   }

//   .ZHeE1b:hover {
//     background-color: rgba(0, 0, 0, .06);
//     outline: 0;
//   }

//   @media screen and (forced-colors:active) {
//     .ZHeE1b:hover {
//       border: 3px solid transparent;
//     }
//   }

//   .sbsb_c:last-child .ZHeE1b {
//     border-radius: 0 0 2px 2px;
//   }

//   .sbsb_c[dir=ltr] .DgCNMb {
//     direction: ltr;
//     text-align: left;
//   }
