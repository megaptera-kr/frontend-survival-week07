import 'reflect-metadata';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import React from 'react';
import Routes from './routes';

function main() {
  const container = document.getElementById('root');
  if (!container) {
    return;
  }
  const RouteList = createBrowserRouter(Routes);

  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <RouterProvider router={RouteList} />
    </React.StrictMode>,
  );
}

main();
