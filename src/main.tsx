import 'reflect-metadata';

import ReactDOM from 'react-dom/client';

import React from 'react';
import App from './App';

import worker from './mocks/browser';

function main() {
  const container = document.getElementById('root');
  if (!container) {
    return;
  }

  // msw worker for browser starts
  if (process.env.NODE_ENV === 'development') {
    worker.start();
  }

  const root = ReactDOM.createRoot(container);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

main();
