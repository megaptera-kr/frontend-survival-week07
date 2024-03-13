import { useLocation } from 'react-router';

function OrderDetailPage() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const orderId = params.get('orderId');

  return <div>order detail-{orderId}</div>;
}

export default OrderDetailPage;
