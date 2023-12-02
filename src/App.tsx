import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="main-page">
      <h1>메가테라 푸드코트 키오스크</h1>
      <p>원하시는 주문을 터치해주세요</p>
      <ul className="link-list">
        <li>
          <Link to="/order">매장주문</Link>
        </li>
        <li>
          <Link to="/order">주문하기</Link>
        </li>
      </ul>
    </div>
  );
}
