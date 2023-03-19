import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/restaurants">식당목록</Link>
        </li>
        <li>
          <Link to="/cart">장바구니</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
