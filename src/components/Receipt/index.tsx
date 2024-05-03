import { useEffect } from 'react';
import useCartStore from '../../hook/useCartStore';
import useCreateOrder from '../../hook/useCreateOrder';
import convertKRW from '../../utils/convertKRW';
import getTotalPrice from '../../utils/getTotalPrice';

type ReceiptProps = {
  goToIntro:() => void
  goToResult:(orderId:string) => void
}

function Receipt({ goToIntro, goToResult }:ReceiptProps) {
  const [{ menu }, cartStore] = useCartStore();
  const totalPrice = getTotalPrice(menu);

  const { postOrders } = useCreateOrder();

  const submitOrders = async () => {
    if (menu.length === 0) {
      return;
    }
    const orderId = await postOrders(menu);
    goToResult(orderId);
  };

  // unmount시에는 어떻게 테스트 할 수 있을까? => test 코드에 jest.fn()
  useEffect(() => () => {
    cartStore.clearCart();
  }, []);
  return (
    <div>
      <p>
        주문내역
        {menu.length}
        개
      </p>

      <ul>
        {menu.map((food) => (
          <li key={food.id}>
            <span>{`${food.name} ${convertKRW(food.price)}`}</span>
            <button type="button" onClick={() => cartStore.removeCart(food.id)}>X</button>
          </li>
        ))}
      </ul>

      <p>
        총 결제 예상금액
        {convertKRW(totalPrice)}
      </p>

      <button type="button" onClick={goToIntro}>취소</button>
      <button type="button" onClick={submitOrders}>주문하기</button>
    </div>
  );
}

export default Receipt;
