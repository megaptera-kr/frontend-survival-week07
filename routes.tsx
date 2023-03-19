import Layout from './src/components/Layout';

import HomePage from './src/pages/HomePage';
import CartPage from './src/pages/CartPage';
import ShopListPage from './src/pages/ShopListPage';
import ShopDetailPage from './src/pages/ShopDetailPage';
import OrderPage from './src/pages/OrderPage';
import OrderComplete from './src/pages/OrderCompletePage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/restaurants', element: <ShopListPage /> },
      { path: '/restaurant/:id', element: <ShopDetailPage /> },
      { path: '/cart', element: <CartPage /> },
      { path: '/order', element: <OrderPage /> },
      { path: '/order/done', element: <OrderComplete /> },
    ],
  },
];

export default routes;
