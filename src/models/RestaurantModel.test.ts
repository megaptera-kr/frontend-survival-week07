import RestaurantModel from './RestaurantModel';
import MenuModel from './MenuModel';
import RestaurantType from '../types/RestaurantType';

import fixtures from '../../fixtures';

test('RestaurantModel', () => {
  const { restaurants } = fixtures;

  restaurants.forEach((restaurant: RestaurantType) => {
    const restaurantModel = new RestaurantModel(restaurant);

    expect(restaurantModel).not.toBeNull();
    expect(restaurantModel.getId()).toBe(restaurant.id);
    expect(restaurantModel.getName()).toBe(restaurant.name);
    expect(restaurantModel.getCategory()).toBe(restaurant.category);
    expect(restaurantModel.getMenu().length).toBe(restaurant.menu.length);

    restaurantModel.getMenu().forEach((menuModel: MenuModel, index: number) => {
      expect(menuModel.getId()).toBe(restaurant.menu[index].id);
      expect(menuModel.getName()).toBe(restaurant.menu[index].name);
      expect(menuModel.getPrice()).toBe(restaurant.menu[index].price);
    });
  });
});
