import useCartStore from '../../hooks/useCartStore';
import Button from './Button';

export default function ButtonContainer() {
  const [{ menu, totalPrice }, store] = useCartStore();
  return (
    <div className="w-full flex gap-4 mt-4">
      <Button name="전체취소" handleClick={() => store.allCancelMenu()} />
      <Button name="주문하기" handleClick={() => store.orderMenuRequest({ menu, totalPrice })} />
    </div>
  );
}
