import { useLocation, useNavigate } from 'react-router-dom';
import Order from '../components/Order';

export default function OrderCompletePage() {
  const navigate = useNavigate();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get('orderId');

  const handleClickBack = () => {
    navigate('/');
  };

  if (!orderId) {
    navigate('/');
    return null;
  }

  return (
    <Order
      orderId={orderId}
      handleClickBack={handleClickBack}
    />
  );
}
