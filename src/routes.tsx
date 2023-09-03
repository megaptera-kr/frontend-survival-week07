import App from './App';
import Root from './pages/Root';
import Restaurants from './pages/Restaurants';
import Order from './pages/Order';

const routes = [
  {
    element: <App />,
    children: [
      { index: true, element: <Root /> },
      { path: '/order', element: <Restaurants /> },
      { path: '/order/complete', element: <Order /> },
    ],
  },
];

export default routes;
