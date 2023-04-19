import Layout from './Layout';
import HomePage from './pages/HomePage';
import RestaurantListPage from './pages/RestaurantListPage';

const routes = [
  {
    element: <Layout />,
    children: [
      // { path: '/', element: <App /> },
      { path: '/', element: <HomePage /> },
      { path: '/restaurants', element: <RestaurantListPage /> },
    ],
  },
];

export default routes;
