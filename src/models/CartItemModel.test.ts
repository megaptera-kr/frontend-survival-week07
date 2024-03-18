import CartItemModel from './CartItemModel';

import RestaurantType from '../types/RestaurantType';

import fixtures from '../../fixtures';
import MenuType from '../types/MenuType';

test('CartItemModel', () => {
  const { restaurants } = fixtures;
  const restaurant: RestaurantType = restaurants[0];
  const menuItem: MenuType = restaurant.menu[0];

  const obj = {
    menuId: menuItem.id,
    menuName: menuItem.name,
    menuPrice: menuItem.price,
    restaurantId: restaurant.id,
    restaurantName: restaurant.name,
    categoryName: restaurant.category,
    quantity: 1,
  };

  const model = new CartItemModel({ ...obj });

  expect(model).not.toBeNull();
  expect(model.id).not.toBeNull();
  expect(model.menuId).toBe(obj.menuId);
  expect(model.menuName).toBe(obj.menuName);
  expect(model.menuPrice).toBe(obj.menuPrice);
  expect(model.restaurantId).toBe(obj.restaurantId);
  expect(model.restaurantName).toBe(obj.restaurantName);
  expect(model.categoryName).toBe(obj.categoryName);
  expect(model.quantity).toBe(obj.quantity);
});
