import 'reflect-metadata';

import OrderPage from './pages/OrderPage';
import OrderCompletePage from './pages/OrderCompletePage';

import Layout from './components/Restaurant/Layout';
import IntroPage from './pages/IntroPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <IntroPage /> },
      { path: '/order', element: <OrderPage /> },
      { path: '/order/complete', element: <OrderCompletePage /> },
    ],
  },
];

export default routes;
