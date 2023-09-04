import 'reflect-metadata';

import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import routes from './routes';

function main() {
  const container = document.getElementById('root');
  if (!container) {
    return;
  }

  const root = ReactDOM.createRoot(container);
  const router = createBrowserRouter(routes);
  root.render(<RouterProvider router={router} />);
}

main();
