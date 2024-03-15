import { useState } from 'react';

import { useNavigate } from 'react-router';
import OrderAPI from '../apis/OrderAPI';

import CartModel from '../models/CartModel';
import ReceiptModel from '../models/ReceiptModel';

const api = new OrderAPI();

type useOrderReturn = {
  orderId: string;
  handleOrderCreate: () => Promise<void>;
};

function useOrder(cart: CartModel): useOrderReturn {
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState<string>('');

  const handleOrderCreate = async () => {
    if (!cart.cartItems.length) {
      return;
    }
    const response = await api.create({ cart });
    setOrderId(response.orderId);
    cart.clearItems();
    navigate(`/order/complete?orderId=${response.orderId}`);
  };

  return { orderId, handleOrderCreate };
}

export default useOrder;
