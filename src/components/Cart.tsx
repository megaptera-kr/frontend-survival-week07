import { Link } from 'react-router-dom';
import useCartStore from '../hooks/useCartStore';
import CartItem from './CartItem';
import OrderButton from './OrderButton';

export default function Cart() {
  const [{ menu }, store] = useCartStore();

  const totalPrice = menu.reduce((acc, food) => acc + food.price, 0);

  const handleClickCancle = (index: number) => {
    store.removeMenu(index);
  };

  return (
    <div>
      <p>
        주문내역
        {' '}
        {menu.length}
        개
      </p>
      <p>
        총 결제 예상금액
        {' '}
        {totalPrice.toLocaleString()}
        원
      </p>
      <ul>
        {
          menu.map((food, index) => (
            <CartItem
              key={`${food.id}-${index}`}
              food={food}
              index={index}
              onClickCancle={handleClickCancle}
            />
          ))
        }
      </ul>
      <div>
        <Link to="/">
          <button type="button">취소</button>
        </Link>
        <OrderButton
          menu={menu}
          totalPrice={totalPrice}
        />
      </div>
    </div>
  );
}
