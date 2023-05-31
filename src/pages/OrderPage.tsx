import { Link } from 'react-router-dom';

function OrderPage() {
  return (
    <main>
      <h1>이대로 주문하시겠어요?</h1>
      <Link to="/complete">결제</Link>
    </main>
  );
}

export default OrderPage;
