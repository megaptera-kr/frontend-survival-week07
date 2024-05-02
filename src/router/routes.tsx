import { Outlet } from 'react-router';
import { IntroPage, OrderPage } from '../pages';

function Layout() {
  return (
    <div>
      <header>
        <h1>메가테라 푸드코트 키오스크</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <IntroPage />,
      },
      {
        path: '/order',
        element: <OrderPage />,
      },
    ],
  },
];

export default routes;
