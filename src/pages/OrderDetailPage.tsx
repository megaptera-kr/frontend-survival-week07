import { useLocation } from 'react-router';

function OrderDetailPage() {
  const { state } = useLocation();
  const orderId = state?.orderId;

  if (!orderId) {
    return <div>주문 ID를 찾을 수 없습니다.</div>;
  }

  console.log(orderId);

  return <div>order detail-{orderId}</div>;
}

export default OrderDetailPage;
