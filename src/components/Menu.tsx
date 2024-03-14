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
