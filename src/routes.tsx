import HomePage from './pages/HomePage';

import Layout from './components/Layout';
import RestaurantListPage from './pages/RestaurantListPage';
import CartPage from './pages/CartPage';
import RestaurantDetailPage from './pages/RestaurantDetailPage';
import OrderPage from './pages/OrderPage';
import OrderCompletePage from './pages/OrderCompletePage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/list', element: <RestaurantListPage /> },
      { path: '/cart', element: <CartPage /> },
      { path: '/detail', element: <RestaurantDetailPage /> },
      { path: '/order', element: <OrderPage /> },
      { path: '/complete', element: <OrderCompletePage /> },
    ],
  },
];

export default routes;
