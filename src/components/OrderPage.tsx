import { Link } from 'react-router-dom';

export default function OrderPage() {
  return (
    <>
      <h1>이대로 주문하시겠어요?</h1>
      <Link to="/complete">결제</Link>
    </>
  );
}
