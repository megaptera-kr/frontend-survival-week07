import { Outlet } from 'react-router';

function Layout() {
  return (
    <div>
      <header>헤더</header>
      <Outlet />
      <footer>푸터</footer>
    </div>
  );
}

export default Layout;
