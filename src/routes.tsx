import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import OrderCompletePage from './pages/OrderCompletePage';
import Layout from './components/Layout';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      {
        path: '/order',
        element: <MenuPage />,
      },
      { path: '/order/complete', element: <OrderCompletePage /> },
    ],
  },
];

export default routes;
