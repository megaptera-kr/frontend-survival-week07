import { RouterProvider } from 'react-router-dom';
import { routes } from './router/router';

export default function App() {
  return <RouterProvider router={routes} />;
}
