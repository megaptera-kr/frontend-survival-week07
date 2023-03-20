import { HTMLAttributes } from 'react';

import Food from '../models/Food';

type MenuItemProps = {
  food: Food;
} & HTMLAttributes<Element>;

export default function MenuItem({ food, children }: MenuItemProps) {
    const { name, price } = food;

    return (
        <li
            style={{
                display: 'flex',
                paddingBlock: '.5rem',
            }}
      >
            <span style={{ margin: '0 auto' }}>
                {name}
            (
                {price.toLocaleString()}
            )
            </span>
            {children}
      </li>
    );
}
