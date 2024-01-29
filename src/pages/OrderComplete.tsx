import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import Receipt from '../components/order/Receipt';

export default function OrderComplete() {
  const navigate = useNavigate();
  const [param] = useSearchParams();
  const OrderId = param.get('orderId');

  const navigateToHome = () => {
    navigate('/');
  };

  if (!OrderId) {
    navigate('/');
    return null;
  }

  return (
    <div>
      <Receipt orderId={OrderId} />
      <button type="button" onClick={navigateToHome}>
        메인화면으로 돌아가기
      </button>
    </div>
  );
}
