import Layout from './components/Layout';
import Home from './pages/Home';
import Order from './pages/Order';
import Complete from './pages/Complete';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'order',
        element: <Order />,
      },
      {
        path: 'order/complete',
        element: <Complete />,
      },
    ],
  },
];

export default routes;
