import MenuItem from './MenuItem';

import Food from '../../types/Food';

type MenuProps = {
    menu: Food[];
}

export default function Menu({ menu }: MenuProps) {
  return (
    <ul>
      {menu.map((food, index) => {
        const key = `${food.id}-${index}`;

        return (
          <MenuItem
            key={key}
            food={food}
          >
            <button type="button">
              선택
            </button>
          </MenuItem>
        );
      })}
    </ul>
  );
}
