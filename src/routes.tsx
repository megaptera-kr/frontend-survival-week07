import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import OrderPage from './pages/order/OrderPage';
import ComplateOrderPage from './pages/order/ComplateOrderPage';

export const routePath = {
  root: '/',
  order: '/order',
  orderComplate: '/order/complate',
} as const;

export type RoutePathType = typeof routePath[keyof typeof routePath];

export const pureRoutes = [
  {
    element: <Layout />,
    children: [
      {
        path: routePath.root,
        element: <HomePage />,
      },
      {
        path: routePath.order,
        element: <OrderPage />,
      },
      {
        path: routePath.orderComplate,
        element: (
          <ComplateOrderPage />
        ),
      },
    ],
  },
];

export default createBrowserRouter(pureRoutes);
