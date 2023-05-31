import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import routes from './routes';

const router = createBrowserRouter(routes);

export default function App() {
  return (
    // <div>
    //   <h1>어서오세요, 메가의 민족입니다</h1>
    //   <Restaurants restaurants={restaurants} />
    //   <Cart />
    // </div>
    <RouterProvider router={router} />
  );
}
