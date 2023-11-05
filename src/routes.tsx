import React from 'react';
import Layout from './components/Layout';
import CompleteOrderPage from './pages/CompleteOrderPage';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/', element: <CompleteOrderPage /> },
      { path: '/', element: <OrderPage /> },
    ],
  },
];

export default routes;
