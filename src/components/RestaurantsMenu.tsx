import useBasketStore from '../hooks/useBasketStore';
import { Menu } from '../types/restaurants';
import RestaurantsMenuButton from './RestaurantsMenuButton';

type RestaurantsMenuProps = {
  menu: Menu[];
}

export default function RestaurantsMenu({ menu }: RestaurantsMenuProps) {
  const [, store] = useBasketStore();

  const handleClickMenu = (menuItem: Menu) => {
    store.addMenu(menuItem);
  };

  return (
    <div
      style={{
        paddingBlock: '1rem',
      }}
    >
      {menu.map((menuItem) => (
        <div key={menuItem.id}>
          <RestaurantsMenuButton
            name={menuItem.name}
            price={menuItem.price}
            onClick={() => handleClickMenu(menuItem)}
          />
        </div>
      ))}
    </div>
  );
}
