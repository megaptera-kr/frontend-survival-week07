import { useNavigate, useLocation } from 'react-router';

import useReadOrder from '../hooks/useReadOrder';
import CartItems from '../components/CartItems';

function OrderDetailPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const orderId = state?.orderId;

  if (!orderId) {
    return <i>주문 ID를 찾을 수 없습니다</i>;
  }

  const { receipt } = useReadOrder({ orderId });

  if (!receipt) {
    return <div>Loading...</div>;
  }

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>주문이 완료되었습니다!</h2>
      <p>
        주문번호 <span>{orderId}</span>
      </p>
      <h2>주문목록</h2>
      <CartItems cartItems={receipt.menuItems} pageId='order-detail-page'>
        <div>
          <span>총가격: {receipt.getMoneyFormatPrice()}원</span>
        </div>
        <button type='button' onClick={handleClick}>
          메인화면으로 돌아가기
        </button>
      </CartItems>
    </div>
  );
}

export default OrderDetailPage;
