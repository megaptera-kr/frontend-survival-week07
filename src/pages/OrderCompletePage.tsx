import { useNavigate, useSearchParams } from 'react-router-dom';
import OrderMessage from '../components/OrderMessage';
import OrderList from '../components/OrderList';

export default function OrderCompletePage() {
  const navigate = useNavigate();
  const [serchParams] = useSearchParams();

  const orderId = serchParams.get('orderId');

  if (!orderId) {
    navigate('/');
    return null;
  }

  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      <OrderMessage orderId={orderId} />
      <OrderList orderId={orderId} />
      <button
        type="button"
        onClick={handleClick}
      >
        메인화면으로 돌아가기
      </button>
    </>
  );
}
