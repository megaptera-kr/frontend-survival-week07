import { NavLink } from 'react-router-dom';

const navBarArr: string[] = ['home', 'list', 'cart'];
const displayMap = new Map([
  ['home', 'Home'],
  ['list', '식당 목록'],
  ['cart', '장바구니'],
]);

export default function Navbar() {
  return (
    <div>
      {navBarArr.map(
        (item): JSX.Element => (
          <li key={item}>
            <NavLink to={`/${item}`}>{displayMap.get(item)}</NavLink>
          </li>
        ),
      )}
    </div>
  );
}
