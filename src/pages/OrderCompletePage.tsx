import { useEffect } from 'react';
import useCartStore from '../hooks/useCartStore';

function OrderCompletePage() {
  const [{ items }, cartStore] = useCartStore();

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    cartStore.clearItem();
  }, []);

  return (
    <h1>주문 완료, 서둘러 배달가겠습니다!</h1>
  );
}

export default OrderCompletePage;
