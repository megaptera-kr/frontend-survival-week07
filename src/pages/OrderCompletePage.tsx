import { useNavigate } from 'react-router';

import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import PATHNAME from '../constants/pathname';
import Order from '../components/order';

export default function OrderCompletePage() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const orderId = searchParams.get('orderId');

  const handleClickBack = () => {
    navigate(PATHNAME.Home);
  };

  useEffect(() => {
    if (!orderId) {
      navigate(PATHNAME.Home);
    }
  }, [orderId]);

  if (!orderId) return null;

  return <Order orderId={orderId} handleClickBack={handleClickBack} />;
}
