import { render, screen } from '@testing-library/react';

import RestaurantTableRow from './RestaurantRow';

import foods from '../../../fixtures/foods';

describe('RestaurantRow', () => {
  const restaurant = {
    id: 'RESTAURANT_01',
    category: '중식',
    name: '메가반점',
    menu: [...foods],
  };

  it('render RestaurantRow', () => {
    render(
      <table>
        <tbody>
          <RestaurantTableRow restaurant={restaurant} />
        </tbody>
      </table>,
    );
    screen.getByText(/메가반점/);
    screen.getByText(/짜장면 8,000원/);
  });
});
