import Layout from './components/Layout';
import Complete, { loader as completeLoader } from './pages/Complete';
import Home from './pages/Home';
import Order, { loader as orderLoader } from './pages/Order';

const routes = ([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/order',
        element: <Order />,
        loader: orderLoader,
      },
      {
        path: '/order/complete',
        element: <Complete />,
        loader: completeLoader,
      },
    ],
  },
]);

export default routes;
