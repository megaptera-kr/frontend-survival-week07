import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import RestaurantListPage from './pages/RestaurantListPage';
import RestaurantDetailPage from './pages/RestaurantDetailPage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import OrderCompletePage from './pages/OrderCompletePage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/restaurants', element: <RestaurantListPage /> },
      { path: '/restaurants/:id', element: <RestaurantDetailPage /> },
      { path: '/cart', element: <CartPage /> },
      { path: '/order', element: <OrderPage /> },
      { path: '/order/complete', element: <OrderCompletePage /> },
    ],
  },
];

export default routes;
