import Home from './pages/Home';
import Order from './pages/Order';
import Complete from './pages/Complete';
import Layout from './components/Layout';

const routes = [
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
      },
      {
        path: '/order/complete',
        element: <Complete />,
      },
    ],
  },

];

export default routes;
