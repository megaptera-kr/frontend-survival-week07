import { NavLink } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h2>원하시는 주문을 터치해주세요</h2>
      <NavLink to="/order">
        <input type="button" value="매장 주문" />
      </NavLink>
      <NavLink to="/order">
        <input type="button" value="전체 포장" />
      </NavLink>
    </div>
  );
}
