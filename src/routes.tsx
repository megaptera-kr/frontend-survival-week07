import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import OrderCompletePage from './pages/OrderCompletePage';

function Layout() {
  return (
    <div>
      <Header />
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
      { path: '/', element: <HomePage /> },
      {
        path: '/order',
        element: <MenuPage />,
        // children: [
        //   { path: '/order/complete', element: <OrderCompletePage /> },
        // ],
      },
      { path: '/order/complete', element: <OrderCompletePage /> },
    ],
  },
];

export default routes;
