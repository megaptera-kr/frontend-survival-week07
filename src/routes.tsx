import HomePage from './pages/HomePage';

import Layout from './components/Layout';
import RestaurantListPage from './pages/RestaurantListPage';
import CartPage from './pages/CartPage';
import RestaurantDetailPage from './pages/RestaurantDetailPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/list', element: <RestaurantListPage /> },
      { path: '/cart', element: <CartPage /> },
      { path: '/detail', element: <RestaurantDetailPage /> },
    ],
  },
];

export default routes;
