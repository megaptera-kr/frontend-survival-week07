import Layout from './Layout';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import RestaurantDetailPage from './pages/RestaurantDetailPage';
import RestaurantListPage from './pages/RestaurantListPage';

const routes = [
  {
    element: <Layout />,
    children: [
      // { path: '/', element: <App /> },
      { path: '/', element: <HomePage /> },
      { path: '/restaurants', element: <RestaurantListPage /> },
      { path: '/restaurants/:restaurantId', element: <RestaurantDetailPage /> },
      { path: '/cart', element: <CartPage /> },
    ],
  },
];

export default routes;
