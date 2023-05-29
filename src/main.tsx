import 'reflect-metadata';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import routes from './routes';

function main() {
  const container = document.getElementById('root');
  const router = createBrowserRouter(routes);

  if (!container) {
    return;
  }

  const root = ReactDOM.createRoot(container);
  root.render((
    <RouterProvider router={router} />
  ));
}

main();
