import styled, { css } from 'styled-components';

const sizes = {
  giant: 1200,
  desktop: 992,
  tablet: 768,
  phone: 376
};

const colWidth = {
  "12": "100%",
  "11": "91.66667%",
  "10": "83.33333%",
  "9": "75%",
  "8": "66.66667%",
  "7": "58.33333%",
  "6": "50%",
  "5": "41.66667%",
  "4": "33.33333%",
  "3": "25%",
  "2": "16.66667%",
  "1": "8.33333%",
};

const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 14;
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
  ${({height}) => height && `height: ${height}px;`}
  ${media.tablet`width: 750px;`}
  ${media.desktop`width: 970px;`}
  ${media.giant`width: 1170px;`}
`;

const Row = styled.div`
  margin-left: -15px;
  margin-right: -15px;

  &:after {
    content: "";
    clear: both;
    display: table;
  }
`;

const Col = styled.div`
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;  
  ${media.tablet`
    ${({sm}) => sm && `width: ${colWidth[sm]}; float: left;`}
    ${({smOffset}) => smOffset && `margin-left: ${colWidth[smOffset]};`}
  `}
  ${media.desktop`
    ${({md}) => md && `width: ${colWidth[md]}; float: left;`}
    ${({mdOffset}) => mdOffset && `margin-left: ${colWidth[mdOffset]};`}
  `}
  ${media.giant`
    ${({lg}) => lg && `width: ${colWidth[lg]}; float: left;`}
    ${({lgOffset}) => lgOffset && `margin-left: ${colWidth[lgOffset]};`}
  `}
`;

export { Container, Row, Col };