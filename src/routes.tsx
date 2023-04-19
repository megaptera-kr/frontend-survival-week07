import App from './App';
import Layout from './Layout';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <App /> },
    ],
  },
];

export default routes;
