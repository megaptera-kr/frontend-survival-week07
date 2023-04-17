import { Outlet } from 'react-router-dom';

import Header from './Header';

export default function Layout() {
  return (
    <div>
      <header />
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
