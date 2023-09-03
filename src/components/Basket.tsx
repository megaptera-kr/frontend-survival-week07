import { useNavigate } from 'react-router-dom';

import useBasketStore from '../hooks/useBasketStore';

import BasketList from './BasketList';
import usePostOrder from '../hooks/usePostOrder';
import priceToLocal from '../utils/priceToLocal';

export default function Basket() {
  const navigate = useNavigate();
  const [state, store] = useBasketStore();
  const { postOrder } = usePostOrder();
  const { basket } = state;

  const handleClickRemove = (index: number) => {
    store.removeMenu(index);
  };

  const handleClickCancel = () => {
    store.clearBasket();
    navigate('/');
  };

  const handleClickOrder = async () => {
    if (state.basket.length === 0) {
      alert('장바구니에 메뉴가 없습니다.');
      return;
    }

    const { id } = await postOrder();
    store.clearBasket();
    navigate(`/order/complete?orderId=${id}`);
  };

  return (
    <div>
      <div>
        <span>
          주문내역
          {' '}
          {state.totalCount}
          개
        </span>
      </div>
      <div>
        <span>
          총 결제 예상금액
          {' '}
          {priceToLocal(state.totalPrice)}
          원
        </span>
      </div>
      <BasketList
        list={basket}
        onClickRemove={handleClickRemove}
      />
      <div>
        <button type="button" onClick={handleClickCancel}>취소</button>
        <button type="button" onClick={handleClickOrder}>주문하기</button>
      </div>
    </div>
  );
}
