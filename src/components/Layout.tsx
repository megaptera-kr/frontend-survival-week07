import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <header>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/restaurant">식당 목록</Link></li>
          <li><Link to="/cart">장바구니</Link></li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
