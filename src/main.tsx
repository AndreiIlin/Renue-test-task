import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppWithStore } from './app';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppWithStore />
  </React.StrictMode>,
);
