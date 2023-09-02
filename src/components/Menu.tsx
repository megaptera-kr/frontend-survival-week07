import useCartStore from '../hooks/useCartStore';

import MenuItem from './MenuItem';

import type { Menu } from '../types/restaurants';

type MenuProps = {
  menu: Menu[];
}

export default function Menu({ menu }: MenuProps) {
  const [, store] = useCartStore();
  const handleClickFoodBtn = (food: Menu) => {
    store.addMenu(food);
  };

  return (
    <ul style={{ listStyle: 'none' }}>
      {menu.map((food) => {
        const key = `${food.id}-${Date.now().toLocaleString()}`;
        return <MenuItem key={key} food={food} onClickFoodBtn={handleClickFoodBtn} />;
      })}
    </ul>
  );
}
