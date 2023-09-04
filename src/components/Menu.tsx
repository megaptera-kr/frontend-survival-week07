import useCartStore from '../hooks/useCartStore';
import Food from '../types/Food';
import MenuItem from './MenuItem';

type MenuProps = {
    menu: Food[];
}

export default function Menu({ menu }: MenuProps) {
  const [, store] = useCartStore();

  const handleClickSelect = (food: Food) => {
    store.addMenu(food);
  };

  return (
    <ul>
      {menu.map((food, index) => {
        const key = `${food.id}-${index}`;

        return (
          <MenuItem
            key={key}
            food={food}
            onClickItem={handleClickSelect}
          />
        );
      })}
    </ul>
  );
}
