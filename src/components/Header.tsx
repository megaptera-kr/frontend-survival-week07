import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/restaurants">식당 목록</NavLink></li>
          <li><NavLink to="/cart">장바구니</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
