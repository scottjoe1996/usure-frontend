import React from 'react';
import ReactDOM from 'react-dom/client';
import Personas from './pages/personas/personas';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Personas />
  </React.StrictMode>
);
