import 'reflect-metadata';

import Layout from './components/Layout';

import IntroPage from './pages/IntroPage';
import OrderPage from './pages/OrderPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <IntroPage /> },
      { path: '/order', element: <OrderPage /> },
    ],
  },
];

export default routes;
