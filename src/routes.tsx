import Layout from './Layout';
import HomePage from './pages/HomePage';

const routes = [
  {
    element: <Layout />,
    children: [
      // { path: '/', element: <App /> },
      { path: '/', element: <HomePage /> },
    ],
  },
];

export default routes;
