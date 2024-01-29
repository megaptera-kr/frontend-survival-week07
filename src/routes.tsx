import Layout from './components/Layout';

import Home from './pages/Home';
import Order from './pages/Order';
import OrderComplete from './pages/OrderComplete';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/order', element: <Order /> },
      { path: '/order/complete', element: <OrderComplete /> },
    ],
  },
];

export default routes;
