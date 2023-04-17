import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { ReactRouterObj } from './routes/routes';

function main() {
  const element = document.getElementById('root');
  if (!element) {
    return;
  }

  const root = ReactDOM.createRoot(element);

  root.render(
    <React.StrictMode>
      <RouterProvider router={ReactRouterObj} />
    </React.StrictMode>,
  );
}

main();
