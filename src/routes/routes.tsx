/* eslint-disable import/prefer-default-export */
import Layout from '../components/Layout';
import CartPage from '../pages/Cart.page';
import OrderPage from '../pages/Order.page';
import OrderCompletePage from '../pages/OrderComplete.page';
import RestaurantDetailPage from '../pages/RestaurantDetail.page';
import RestaurantListPage from '../pages/RestaurantList.page';

export const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <h1>어서오세요, 메가의 민족입니다</h1> },
      { path: '/restaurants', element: <RestaurantListPage /> },
      { path: '/restaurants/detail/:id', element: <RestaurantDetailPage /> },
      { path: '/cart', element: <CartPage /> },
      { path: '/order', element: <OrderPage /> },
      { path: '/order-complete', element: <OrderCompletePage /> },
    ],
  },
];
