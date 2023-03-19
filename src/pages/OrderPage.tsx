import { Link } from 'react-router-dom';

export default function OrderPage() {
  return (
    <>

      <div>이대로 주문하시겠어요?</div>

      <li>
        <Link to="/order/done">결제</Link>
      </li>
    </>
  );
}
