import facepaint from 'facepaint';
const colors = {
  white: '#FFFFFF',
  grayExtraLight: '#EEF1F5',
  grayLight: '#CED4DE',
  gray: '#7D899C',
  grayDark: '#2D3747',
  grayExtraDark: '#1D2330',
  dark: '#13161F',
  blue: '#0B5FFF',
  skyBlue: '#1FB6FF'
};

export const breakpoints = {
  mobile: 420,
  tablet: 920,
  desktop: 1120
};

const mq = facepaint([
  `@media(min-width: ${breakpoints.mobile}px)`,
  `@media(min-width: ${breakpoints.tablet}px)`,
  `@media(min-width: ${breakpoints.desktop}px)`
]);

export default {
  colors: {
    primary: colors.blue,
    text: colors.grayDark,
    link: colors.blue,
    footerText: colors.grayDark,
    sidebarBg: colors.grayExtraLight,
    sidebarText: colors.dark,
    background: colors.white,
    border: colors.grayLight,
    theadColor: colors.gray,
    theadBg: colors.grayExtraLight,
    tableColor: colors.dark,
    tooltipBg: colors.dark,
    tooltipColor: colors.grayExtraLight,
    codeBg: colors.grayExtraLight,
    codeColor: colors.gray,
    preBg: colors.grayExtraLight
  },
  mq
};
