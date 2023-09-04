import Layout from '../components/Layout';

import HomePage from '../pages/HomePage';
import CompletePage from '../pages/order/complete';
import OrderPage from '../pages/order';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/order', element: <OrderPage /> },
      { path: '/order/complete', element: <CompletePage /> },
    ],
  },
];

export default routes;
