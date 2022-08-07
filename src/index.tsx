import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@mui/material';

import AppBar from './components/app-bar/app-bar';
import Personas from './pages/personas/personas';
import { theme } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <AppBar />
        <Personas />
      </React.StrictMode>
    </ThemeProvider>
  </BrowserRouter>
);
