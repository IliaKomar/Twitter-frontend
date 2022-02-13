import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './theme';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Router>
          <App />
        </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);