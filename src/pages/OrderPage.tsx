import { Link } from 'react-router-dom';

function OrderPage() {
  return (
    <div>
      <h2>이대로 주문하시겠어요?</h2>
      <Link to="/order/complete" />
    </div>
  );
}

export default OrderPage;
