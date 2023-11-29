import { useNavigate } from 'react-router';
import useMenuStore from '../hooks/useMenuStore';
import totalPrice from '../utils/totalPrice';
import useCreateOrder from '../hooks/useCreateOrder';

import type Food from '../types/Food';

export default function Cart() {
  const [{ menu }, store] = useMenuStore();
  const navigate = useNavigate();
  const calcTotalPrice = totalPrice(menu);
  const { createOrder } = useCreateOrder();

  const handleClickCancel = () => {
    store.clear();
    navigate('/');
  };

  const handleClickRemove = (index:number) => {
    store.removeMenu(index);
  };

  const handleClickOrder = async () => {
    if (!menu.length) return;

    const { id } = await createOrder(menu);
    store.clear();

    navigate(
      {
        pathname: '/order/complete',
        search: `?orderId=${id}`,
      },
    );
  };

  return (
    <div>
      <hr />
      <p>
        메뉴 갯수
        {' '}
        {menu.length || 0}
        개
      </p>
      <p>
        총 결제 예상금액
        {' '}
        {calcTotalPrice}
        원
      </p>
      <div style={{ marginBottom: 20 }}>
        {
          menu.map((el: Food, index: number) => (
          // eslint-disable-next-line react/no-array-index-key
            <p key={index} style={{ margin: 0 }}>
              {`${el.name} ${el.price.toLocaleString()}원`}
              <button type="button" onClick={() => handleClickRemove(index)}>X</button>
            </p>
          ))
        }
      </div>
      <section>
        <button type="button" onClick={handleClickCancel}>취소</button>
        <button type="button" onClick={handleClickOrder}>주문하기</button>
      </section>
    </div>
  );
}
