import { Link } from 'react-router-dom';

export default function OrderCompletePage() {
  return (
    <div>
      <h2>주문이 완료되었습니다!</h2>
      <span>주문번호 12313132123132</span>
      <h2>주문목록</h2>
      <ul>
        <li>김치6,000원</li>
        <li>김치6,000원</li>
        <li>김치6,000원</li>
        <li>김치6,000원</li>
      </ul>
      <div>
        <span>총가격 24,000원</span>
      </div>
      <Link to="/"><button type="button">메인화면으로 돌아가기</button></Link>
    </div>
  );
}
