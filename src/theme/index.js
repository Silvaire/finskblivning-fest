import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#002F6C',
    },
    secondary: {
      main: '#bbb',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;