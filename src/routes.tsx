import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import OrderCompletePage from './pages/OrderCompletePage';
import OrderPage from './pages/OrderPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/order', element: <OrderPage /> },
      { path: '/order/complete', element: <OrderCompletePage /> },
    ],
  },
];

export default routes;
