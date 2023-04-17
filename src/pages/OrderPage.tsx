import { Link } from 'react-router-dom';

export default function OrderPage() {
  return (
    <div>
      <h2>이대로 주문하시겠어요?</h2>
      <Link to="/order-complete">결제</Link>
    </div>
  );
}
