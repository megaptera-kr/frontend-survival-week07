import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import routes from './routes';

function main() {
  const element = document.getElementById('root');
  if (!element) {
    return;
  }

  const router = createBrowserRouter(routes);
  const root = ReactDOM.createRoot(element);

  root.render((
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  ));
}

main();
