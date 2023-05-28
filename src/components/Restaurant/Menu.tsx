import { useLocalStorage } from 'usehooks-ts';

import MenuItem from './MenuItem';

import Food from '../../types/Food';

import useCartStore from '../../hooks/useCartStore';

type MenuProps = {
    menu: Food[];
}

export default function Menu({ menu }: MenuProps) {
  // const [selectedFoods, setFoods] = useLocalStorage<Food[]>('cart', []);
  const [, store] = useCartStore();

  const handleClickSelect = (food: Food) => {
    // setFoods([
    //   ...selectedFoods,
    //   food,
    // ]);
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
          >
            <button type="button" onClick={(() => handleClickSelect(food))}>
              선택
            </button>
          </MenuItem>
        );
      })}
    </ul>
  );
}
