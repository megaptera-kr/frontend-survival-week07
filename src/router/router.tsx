import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../components/HomePage';
import Layout from '../components/Layout';
import RestaurantDetailPage from '../components/RestaurantDetailPage';
import RestaurantListPage from '../components/RestaurantListPage';
import CartPage from '../components/CartPage';
import OrderPage from '../components/OrderPage';
import OrderCompletePage from '../components/OrderCompletePage';

export const router = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/list', element: <RestaurantListPage /> },
      { path: '/detail', element: <RestaurantDetailPage /> },
      { path: '/cart', element: <CartPage /> },
      { path: '/order', element: <OrderPage /> },
      { path: '/complete', element: <OrderCompletePage /> },
    ],
  },
];
export const routes = createBrowserRouter(router);
