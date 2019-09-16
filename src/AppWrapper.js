import React from 'react';
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from './theme';
import App from './App';

function AppWrapper() {
  return (
    <>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
          <App />
      </MuiThemeProvider>

          </>
  );
}

export default AppWrapper;
