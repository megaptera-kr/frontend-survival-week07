import App from '../App';
import Order from '../components/Order/Order';

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
    path: 'complete',
    element: <h1>Complete</h1>,
  },
];

export default Routes;
