import MenuItemModel from '../models/MenuItemModel';
import RestaurantModel from '../models/RestaurantModel';
import MenuItem from './MenuItem';

type MenuProps = {
  menu: MenuItemModel[];
  restaurant: RestaurantModel;
};

export default function Menu({ menu, restaurant }: MenuProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '0.2rem 0.2rem',
      }}
    >
      {!menu.length ? (
        <p>판매할 수 있는 메뉴가 없습니다.</p>
      ) : (
        menu.map((item: MenuItemModel) => (
          <MenuItem
            key={item.getId()}
            menuItem={item}
            restaurant={restaurant}
          />
        ))
      )}
    </div>
  );
}
