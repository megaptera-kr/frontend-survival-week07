import { useNavigate } from 'react-router';

import apiPostCreateOrder from '../../../../api/apiPostCreateOrder';

import useCartStore from '../../../../hooks/useCartStore';

export default function CartOperations() {
  const [{ cart }, store] = useCartStore();
  const navigate = useNavigate();

  const sendToOrderComplete = (id: string) => {
    navigate(`/order/complete?orderId=${id}`);
  };

  const handleOrderInCart = async () => {
    if (cart.length === 0) return;
    const { id } = await apiPostCreateOrder(cart);
    if (id) {
      sendToOrderComplete(id);
      store.clearOrder();
    }
  };

  return (
    <div>
      <button
        type="button"
        style={{ marginLeft: '10px' }}
        onClick={() => store.clearOrder()}
      >
        취소
      </button>
      <button type="button" onClick={handleOrderInCart}>
        주문하기
      </button>
    </div>
  );
}
