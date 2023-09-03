import { Menu } from '../types/restaurants';
import RestaurantsMenuButton from './RestaurantsMenuButton';

type RestaurantsMenuProps = {
  menu: Menu[];
}

export default function RestaurantsMenu({ menu }: RestaurantsMenuProps) {
  const handleClickMenu = (menuItem: Menu) => {
    console.log('handleClickMenu', menuItem);
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
