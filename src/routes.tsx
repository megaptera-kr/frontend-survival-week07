import Layout from './components/Layout';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import OrderCompletePage from './pages/OrderCompletePage';
import OrderPage from './pages/OrderPage';
import RestaurantDetailPage from './pages/RestaurantDetailPage';
import RestaurantListPage from './pages/RestaurantListPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/restaurants', element: <RestaurantListPage /> },
      { path: '/restaurants/:restaurantId', element: <RestaurantDetailPage /> },
      { path: '/cart', element: <CartPage /> },
      { path: '/order', element: <OrderPage /> },
      { path: '/order/complete', element: <OrderCompletePage /> },
    ],
  },
];

export default routes;
