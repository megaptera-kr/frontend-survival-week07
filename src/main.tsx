import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes } from './routes/routes';

function main() {
  const element = document.getElementById('root');
  if (!element) {
    return;
  }

  const root = ReactDOM.createRoot(element);

  const router = createBrowserRouter(routes);

  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}

main();
