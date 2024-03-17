import Layout from './components/Layout';

import HomePage from './pages/HomePage';
import OrderPage from './pages/order/OrderPage';
import CompletePage from './pages/order/complete/CompletePage';

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
