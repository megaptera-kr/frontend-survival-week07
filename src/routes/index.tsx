import App from '../App';
import Complete from '../pages/Complete/Complete';
import Order from '../pages/Order/Order';

const Routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/order',
    element: <Order />,
  },
  {
    path: '/complete',
    element: <Complete />,
  },
];

export default Routes;
