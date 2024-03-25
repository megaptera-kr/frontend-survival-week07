import useCartStore from '../../hooks/useCartStore';
import Food from '../../types/Food';
import MenuItem from './MenuItem';

type MenuProps = {
  menu: Food[]
}

function Menu({ menu }: MenuProps) {
  const [, store] = useCartStore();

  const handleClickSelect = (food: Food) => {
    store.addMenu(food);
  };

  if (!menu.length) {
    return (<p>메뉴가 존재하지 않습니다</p>);
  }

  return (
    <div style={{ paddingBlock: '1rem' }}>
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
    </div>
  );
}

export default Menu;
