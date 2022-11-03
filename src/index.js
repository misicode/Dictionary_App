import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import ThemeProvider from './context/ThemeProvider';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
