import Food from '../Types/Food';

import useCartStore from '../hooks/useCartStore';

type FoodItemProps = {
  food: Food
}

export default function FoodItem({ food }: FoodItemProps) {
  const { name, price } = food;
  const [, store] = useCartStore();

  const handleClickAdd = () => {
    store.addMenu(food);
  };

  return (
    <li>
      <button
        type="button"
        onClick={handleClickAdd}
      >
        {name}
        {' '}
        {price.toLocaleString()}
        원
      </button>
    </li>
  );
}
