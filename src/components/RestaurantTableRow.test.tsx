import { render, screen } from '@testing-library/react';

import RestaurantTableRow from './RestaurantTableRow';

import RestaurantModel from '../models/RestaurantModel';
import MenuItemModel from '../models/MenuItemModel';

import fixtures from '../../fixtures';

test('RestaurantTableRow', () => {
  const { restaurants } = fixtures;
  const restaurant: RestaurantModel = new RestaurantModel(restaurants[0]);

  render(
    <table>
      <tbody>
        <RestaurantTableRow restaurant={restaurant} />
      </tbody>
    </table>,
  );

  screen.getByText(restaurant.getName());
  restaurant.getMenu().forEach((menuItem: MenuItemModel) => {
    screen.queryByText(menuItem.getNamePrice());
  });
});
