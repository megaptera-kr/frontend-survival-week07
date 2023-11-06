import 'reflect-metadata';

import Layout from './components/Layout';
import IntroPage from './pages/IntroPage';
import OrderCompletePage from './pages/OrderCompletePage';
import OrderPage from './pages/OrderPage';

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
