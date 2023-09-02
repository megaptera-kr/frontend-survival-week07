import 'reflect-metadata';

import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';

import routes from './routes';

function main() {
  const container = document.getElementById('root');
  if (!container) {
    return;
  }

  const root = ReactDOM.createRoot(container);
  root.render(<RouterProvider router={routes} />);
}

main();
