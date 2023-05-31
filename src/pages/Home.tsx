import { NavLink } from 'react-router-dom';
import Button from '../components/common/button/Button';

export default function Home() {
  return (
    <div>
      <h2>원하시는 주문을 터치해주세요</h2>
      <NavLink to="/order">
        <Button>매장 주문</Button>
      </NavLink>
      <NavLink to="/order">
        <Button>전체 포장</Button>
      </NavLink>
    </div>
  );
}
