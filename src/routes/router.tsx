import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Layout from '../Layout';
import RestaurantListPage from '../pages/RestaurantListPage';
import CartPage from '../pages/CartPage';
import RestaurantDetailPage from '../pages/RestaurantDetailPage';
import OrderPage from '../pages/OrderPage';
import OrderCompletePage from '../pages/OrderCompletePage';

export const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/list', element: <RestaurantListPage /> },
      { path: '/detail', element: <RestaurantDetailPage /> },
      { path: '/cart', element: <CartPage /> },
      { path: '/order', element: <OrderPage /> },
      { path: '/orderComplete', element: <OrderCompletePage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
