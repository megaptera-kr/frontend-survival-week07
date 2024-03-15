import { useNavigate } from 'react-router';

import OrderAPI from '../apis/OrderAPI';

import CartModel from '../models/CartModel';

const api = new OrderAPI();

type useCreateOrderProps = {
  cart: CartModel;
};

type useCreateOrderReturn = {
  handleOrderCreate: () => Promise<void>;
};

function useCreateOrder({ cart }: useCreateOrderProps): useCreateOrderReturn {
  const navigate = useNavigate();

  const handleOrderCreate = async () => {
    if (!cart.cartItems.length) {
      return;
    }
    const response = await api.create({ cart });
    cart.clearItems();
    navigate(`/order/complete?orderId=${response.orderId}`, {
      state: { orderId: response.orderId },
    });
  };

  return { handleOrderCreate };
}

export default useCreateOrder;
