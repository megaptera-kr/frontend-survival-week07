import { useNavigate } from 'react-router-dom';

import useCartStore from '../hooks/useCartStore';
import PATH from '../constants/path';

export default function OrderPage() {
  const navigate = useNavigate();

  const [, store] = useCartStore();

  const handleOrder = async () => {
    await store.clearItem();
    navigate(PATH.orderCompleted);
  };

  return (
    <section>
      <h1>이대로 주문하시겠어요?</h1>
      <button type="button" onClick={handleOrder}>결제</button>
    </section>
  );
}
