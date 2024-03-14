import MenuItem from './MenuItem';

import Food from '../Types/Food';

type MenuItemProps = {
  menus: Food[];
};

export default function Menu({ menus }: MenuItemProps) {
  // TODO Store 적용
  const handleClickSelect = (food: Food) => {
    //
  };

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
