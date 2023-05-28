import 'reflect-metadata';

import Layout from './components/Layout';

import IntroPage from './pages/IntroPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <IntroPage /> },
    ],
  },
];

export default routes;
