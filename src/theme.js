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
      main: '#ec6a75',
    },
    textGray: '#7C7C7C',
    gray: '#C4C4C4',
  },
});

export default theme;
