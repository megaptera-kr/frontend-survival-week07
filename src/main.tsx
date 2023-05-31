// eslint-disable-next-line import/no-extraneous-dependencies
import 'whatwg-fetch';
import 'reflect-metadata';

import { StrictMode } from 'react';

import ReactDOM from 'react-dom/client';

// eslint-disable-next-line import/no-extraneous-dependencies
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import routes from './routes';
import worker from './mocks/browser';

const router = createBrowserRouter(routes);

async function main() {
  // if (process.env.NODE_ENV === 'development') {
  //   await worker.start({
  //     serviceWorker: {
  //       url: '/mockServiceWorker.js',
  //     },
  //   });
  // }
  const container = document.getElementById('root');
  if (!container) {
    return;
  }

  const root = ReactDOM.createRoot(container);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}

main();
