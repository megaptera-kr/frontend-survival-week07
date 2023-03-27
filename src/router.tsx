import Layout from './components/Layout';
import Home from './pages/Home';
import RestaurantList from './pages/RestaurantList';
import RestaurantDetail from './pages/RestaurantDetail';
import Cart from './pages/Cart';
import Order from './pages/Order';
import OrderComplete from './pages/OrderComplete';

const routes = [
  {
    element: <Layout />,
    children: [{
      path: '/',
      element: <Home />,
    },
    {
      path: '/restaurant',
      element: <RestaurantList />,
    },
    {
      path: '/restaurant/:id',
      element: <RestaurantDetail />,
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
      path: '/orderComplete',
      element: <OrderComplete />,
    },
    ],
  },
];

export default routes;
