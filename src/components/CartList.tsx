import useCartStore from '../hooks/useCartStore';
import Button from './common/button/Button';

export default function CartList() {
  const [, cartStore] = useCartStore();

  const handleRemoveItem = (index: number) => {
    cartStore.removeIndexItem(index);
  };
  return (
    <ul style={{ listStyle: 'none' }}>
      {cartStore.cart.map((food, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={`${food.id}-${index}`}>
          {`${food.name} ${food.price.toLocaleString('ko-kr')}원`}
          <Button
            onClick={() => handleRemoveItem(index)}
          >
            X
          </Button>
        </li>
      ))}
    </ul>
  );
}
