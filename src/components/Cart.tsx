import { useNavigate } from 'react-router-dom';
import useCreateOrder from '../hooks/useCreateOrder';
import calculateTotalPrice from '../utils/calculateTotalPrice';
import useSelector from '../hooks/useSelector';
import CartItem from './CartItem';
import useDispatch from '../hooks/useDispatch';
import OperationButtons from './OperationButtons';

function Cart() {
  const orderList = useSelector((state) => state.order);
  const navigator = useNavigate();
  const createOrder = useCreateOrder();
  const totalPrice = calculateTotalPrice(orderList);
  const dispatch = useDispatch();

  const handleCancelOrder = () => {
    navigator('/');
  };

  const handleDeleteOrder = (index : number) => {
    dispatch({ type: 'deleteOrderList', payload: index });
  };

  const handleSubmit = async () => {
    const receiptId = await createOrder(orderList, totalPrice);

    if (receiptId) navigator(`/order/complete?orderId=${receiptId}`);
  };

  return (
    <div>
      <p>
        주문 내역
        {' '}
        {orderList.length || 0}
        {' '}
        개
      </p>
      <p>
        총 결제 예상금액
        {' '}
        {totalPrice.toLocaleString()}
        원
      </p>
      {orderList && (
        <ul>
          {orderList.map((order, index) => {
            const key = order.id + index;
            return (
              <CartItem
                key={key}
                order={order}
                index={index}
                handleDeleteOrder={handleDeleteOrder}
              />
            );
          })}
          <li />
        </ul>
      )}
      <OperationButtons handleCancelOrder={handleCancelOrder} handleSubmit={handleSubmit} />
    </div>
  );
}

export default Cart;
