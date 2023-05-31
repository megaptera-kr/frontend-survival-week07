import { Link } from 'react-router-dom';

function OrderPage() {
  return (
    <div>
      <h1>이대로 주문하시겠어요?</h1>
      <Link to="/orderComplete">결제</Link>
    </div>
  );
}

export default OrderPage;
