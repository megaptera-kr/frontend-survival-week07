import Layout from './components/restaurants/Layout';
import IntroPage from './pages/IntroPage';
import OrderCompletePage from './pages/OrderCompletePage';
import OrderPage from './pages/OrderPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <IntroPage /> },
      { path: '/order', element: <OrderPage /> },
      { Path: '/order/complede', element: <OrderCompletePage /> },
    ],
  },
];

export default routes;
