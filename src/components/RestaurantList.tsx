import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><NavLink to="/detail">메가반점</NavLink></li>
          <li><NavLink to="/detail">메리김밥</NavLink></li>
          <li><NavLink to="/detail">혹등고래카레</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
