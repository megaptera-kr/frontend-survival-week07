import * as P from './pages';
import Layout from './components/Layout';
import PATH from './constants/path';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <P.Home /> },
      { path: PATH.restaurants, element: <P.RestaurantList /> },
      { path: `${PATH.restaurants}/:id`, element: <P.RestaurantDetail /> },
      { path: PATH.cart, element: <P.Cart /> },
      { path: PATH.order, element: <P.Order /> },
      { path: PATH.orderCompleted, element: <P.OrderComplete /> },
      { path: '*', element: <P.NotFound /> },
    ],
  },
];

export default routes;
