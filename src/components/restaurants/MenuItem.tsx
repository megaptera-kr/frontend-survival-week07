import useStore from '../../hooks/useStore';

import Food from '../../types/Food';

type MenuItemProps = {
    food: Food
}

export default function MenuItem({ food }:MenuItemProps) {
  const store = useStore();
  const handleAddMenu = () => {
    store.addMenu(food);
  };

  return (
    <li key={food.id}>
      <button type="button" onClick={handleAddMenu}>
        <span>
          {food.name}
          {' '}
          {food.price.toLocaleString()}
          원
        </span>
      </button>
    </li>
  );
}
