import { Link } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <h2>원하시는 주문을 터치해주세요</h2>
      <button type="button"><Link to="/order" style={{ textDecoration: 'none', color: 'initial' }}>매장 주문</Link></button>
      <button type="button"><Link to="/order" style={{ textDecoration: 'none', color: 'initial' }}>전체 포장</Link></button>
    </>
  );
}
