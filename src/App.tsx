import {
  RouterProvider,
} from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import routes from './routes';

const route = createBrowserRouter(routes);

export default function App() {
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
}
