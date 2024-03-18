import Layout from './components/Layout';

import IntroPage from './pages/IntroPage';
import OrderPage from './pages/OrderPage';
import OrderResultPage from './pages/OrderResultPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <IntroPage /> },
      { path: '/order', element: <OrderPage /> },
      { path: '/order/complete', element: <OrderResultPage /> },
    ],
  },
];

export default routes;
