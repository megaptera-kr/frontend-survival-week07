/* eslint-disable @typescript-eslint/no-unused-vars */
import MenuItem from './MenuItem';

import Food from '../types/Food';

import useCartStore from '../hooks/useCartStore';

type MenuItemProps = {
  menus: Food[];
};

export default function Menu({ menus }: MenuItemProps) {
  const [_, store] = useCartStore();

  const handleClickSelect = (food: Food) => {
    store.addMenu(food);
  };

  if (!menus.length) {
    return <p>메뉴가 존재하지 않습니다.</p>;
  }

  return (
    <ul>
      {menus.map((menu, index) => {
        const key = `${menu}_${index}`;
        return (
          <MenuItem key={key} menu={menu} onClickItem={handleClickSelect} />
        );
      })}
    </ul>
  );
}
