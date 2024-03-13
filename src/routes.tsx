import Layout from './pages/Layout';
import RootButtonPage from './pages/RootButtonPage';
import OrderPage from './pages/OrderPage';
import OrderDetailPage from './pages/OrderDetailPage';
import ErrorPage from './pages/ErrorPage';

const routes = [
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <RootButtonPage />,
      },
      {
        path: '/order',
        element: <OrderPage />,
      },
      {
        path: '/order/complete',
        element: <OrderDetailPage />,
      },
    ],
  },
];

export default routes;
