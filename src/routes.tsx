import Layout from './Layout';
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
      { path: '/restaurantList', element: <RestaurantListPage /> },
      { path: '/restaurantDetail', element: <RestaurantDetailPage /> },
      { path: '/cart', element: <CartPage /> },
      { path: '/order', element: <OrderPage /> },
      { path: '/orderComplete', element: <OrderCompletePage /> },
    ],
  },
];

export default routes;
