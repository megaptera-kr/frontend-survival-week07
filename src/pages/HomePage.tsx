import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <h2>원하시는 주문을 터치해주세요</h2>
      <Link to="/order">
        <button type="button">매장 주문</button>
      </Link>
      <Link to="/order">
        <button type="button">전체 포장</button>
      </Link>
    </>
  );
}
