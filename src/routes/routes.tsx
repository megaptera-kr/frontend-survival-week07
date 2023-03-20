import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Cart from '../components/Cart';
import Order from '../components/Order';
import OrderComplete from '../components/OrderComplete';
import RestaurantList from '../components/RestaurantList';
import Restaurants from '../components/Restaurants';
import Layout from './Layout';

type RouterItem = {
  path: string;
  element: JSX.Element;
};

export const RouterInfo: RouterItem[] = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/home',
    element: <App />,
  },
  {
    path: '/list',
    element: <RestaurantList />,
  },
  {
    path: '/restaurants',
    element: <Restaurants />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/order',
    element: <Order />,
  },
  {
    path: '/ordercomplete',
    element: <OrderComplete />,
  },
];

export const ReactRouterObj = createBrowserRouter([
  {
    element: <Layout />,
    children: RouterInfo,
  },
]);
