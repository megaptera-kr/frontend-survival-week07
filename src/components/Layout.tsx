import { Outlet } from 'react-router-dom';

import Header from './Header';

export default function Layout() {
  return (
    <div className="container text-center">
      <Header />
      <main className="h-[calc(100vh-104px)] w-full flex justify-center items-center">
        <Outlet />
      </main>
    </div>
  );
}
