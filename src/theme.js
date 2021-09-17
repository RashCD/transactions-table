import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4573FF',
    },
    secondary: {
      main: '#ffffff',
    },
    error: {
      light: '#F9D1D5',
      main: '#E84855',
    },
    success: {
      light: '#bff3e6',
      main: '#007C5C',
    },
    warning: {
      light: '#FFE59D',
      main: '#997207',
    },
    default: {
      light: '#ECECEC',
      main: '#777777',
    },
  },
  textGray: '#7C7C7C',
  gray: '#C4C4C4',
  typography: {
    fontFamily: ['Open Sans'],
  },
});

export default theme;
