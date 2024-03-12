import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './pages/Layout';
import RootButtonPage from './pages/RootButtonPage';
import OrderPage from './pages/OrderPage';
import OrderDetailPage from './pages/OrderDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <RootButtonPage /> },
      {
        path: '/order',
        element: <OrderPage />,
      },
      {
        path: '/order/complete',
        element: <OrderDetailPage />,
      },
    ],
  },
]);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
