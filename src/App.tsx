import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import routes from './routes';

export default function App() {
  const router = createBrowserRouter(routes);

  return (
    <>
      <h1>메가테라 푸드코트 키오스크</h1>
      <RouterProvider router={router} />
    </>
  );
}
