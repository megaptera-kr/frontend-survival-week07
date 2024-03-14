import useCartStore from '../hooks/useCartStore';

import MenuItemModel from '../models/MenuItemModel';
import RestaurantModel from '../models/RestaurantModel';
import CartItemModel from '../models/CartItemModel';

type MenuItemProps = {
  menuItem: MenuItemModel;
  restaurant: RestaurantModel;
};

function MenuItem({ menuItem, restaurant }: MenuItemProps) {
  const [, cartStore] = useCartStore();
  const nameAndPrice = menuItem.getNamePrice();

  const handleClick = () => {
    cartStore.addItem(
      CartItemModel.makeInstanceHelper({ menuItem, restaurant, quantity: 1 }),
    );
  };

  return (
    <button
      type='button'
      name={`#${menuItem.getId()}-${menuItem.getName()}`}
      onClick={handleClick}
    >
      {nameAndPrice}
    </button>
  );
}

export default MenuItem;
