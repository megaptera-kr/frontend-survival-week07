import { render, screen } from '@testing-library/react';

import RestaurantTableRow from './RestaurantTableRow';

import RestaurantModel from '../models/RestaurantModel';
import MenuModel from '../models/MenuModel';

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
  restaurant.getMenu().forEach((menuItem: MenuModel) => {
    screen.queryByText(menuItem.getNamePrice());
  });
});
