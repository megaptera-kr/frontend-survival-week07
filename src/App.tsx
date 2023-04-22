import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Restaurants from './components/Restaurants';
import Cart from './components/Cart';

import useFetchRestaurants from './hooks/useFetchRestaurants';
import routes from './routes';

const router = createBrowserRouter(routes);

export default function App() {
  const restaurants = useFetchRestaurants();

  return (
    <div>
      <RouterProvider router={router} />
      <Restaurants restaurants={restaurants} />
      <Cart />
    </div>
  );
}
