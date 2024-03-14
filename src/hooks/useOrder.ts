import { useState } from 'react';

import { useNavigate } from 'react-router';
import OrderAPI from '../apis/OrderAPI';

import CartModel from '../models/CartModel';
import ReceiptModel from '../models/ReceiptModel';

const api = new OrderAPI();

type useOrderReturn = {
  receipt: ReceiptModel | null;
  handleOrderCreate: () => Promise<void>;
};

function useOrder(cart: CartModel): useOrderReturn {
  const navigate = useNavigate();
  const [receipt, setReceipt] = useState<ReceiptModel | null>(null);

  const handleOrderCreate = async () => {
    if (!cart.cartItems.length) {
      return;
    }
    const response: ReceiptModel = await api.create({ cart });
    setReceipt(new ReceiptModel({ ...response }));
    cart.clearItems();
    navigate('/order/complete');
  };

  return { receipt, handleOrderCreate };
}

export default useOrder;
