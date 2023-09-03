/* eslint-disable react/no-array-index-key */
import { Menu } from '../types/restaurants';

import priceToLocal from '../utils/priceToLocal';

type BasketListProps = {
  list: Menu[]
  onClickRemove: (index: number) => void;
}

export default function BasketList({ list, onClickRemove }: BasketListProps) {
  return (
    <ul>
      {list.map((listItem, index) => (
        <li key={`${listItem.id}-${index}`}>
          <span>
            {listItem.name}
            {' '}
          </span>
          <span>
            {priceToLocal(listItem.price)}
            원
          </span>
          <button type="button" onClick={() => onClickRemove(index)}>X</button>
        </li>
      ))}
    </ul>
  );
}
