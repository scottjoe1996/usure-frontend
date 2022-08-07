import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@mui/material';
import { Container } from '@mui/system';

import AppBar from './components/app-bar/app-bar';
import Personas from './pages/personas/personas';
import { theme } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <AppBar />
        <Container maxWidth='md'>
          <Personas />
        </Container>
      </React.StrictMode>
    </ThemeProvider>
  </BrowserRouter>
);
