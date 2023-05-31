import { HTMLAttributes } from 'react';

import MenuItem from './MenuItem';

import useCartStore from '../hooks/useCartStore';

import Food from '../models/Food';

type MenuProps = {
  menu: Food[];
} & HTMLAttributes<Element>;

export default function Menu({ menu }: MenuProps) {
  const [, cartStore] = useCartStore();

  const handleClickSelect = (food: Food) => {
    const { id, name, price } = food;

    cartStore.addItem({
      productId: id,
      name,
      price,
      quantity: 1,
    });
  };

  return (
    <ul>
      {menu.map((food, index) => {
        const { id } = food;

        const key = `${id}-${index}`;

        return (
          <MenuItem key={key} food={food}>
            <button
              style={{ marginLeft: '.5rem' }}
              name={`#${food.name}`}
              type="button"
              onClick={() => handleClickSelect(food)}
            >
              선택
            </button>
          </MenuItem>
        );
      })}
    </ul>
  );
}
