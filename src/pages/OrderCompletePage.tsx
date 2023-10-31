import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import Order from '../components/Order';

export default function OrderCompletePage() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const orderId = searchParams.get('orderId');

  if (!orderId) {
    navigate('/');
    return null;
  }

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div>
      <Order
        orderId={orderId}
        onClick={handleClick}
      />
    </div>
  );
}
