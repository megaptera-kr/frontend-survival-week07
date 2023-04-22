import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cart from './components/Cart';

import routes from './routes';

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Cart />
    </div>
  );
}
