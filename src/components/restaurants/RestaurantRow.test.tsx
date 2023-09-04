import { render, screen } from '@testing-library/react';
import fixtures from '../../../fixtures';
import RestaurantRow from './RestaurantRow';

describe('<RestaurantRow />', () => {
  it('render restaurant', () => {
    const restaurant = fixtures.restaurants[0];
    render(
      <table>
        <tbody>
          <RestaurantRow restaurant={restaurant} />
        </tbody>
      </table>,
    );

    screen.getByText(/짜장면/);
    screen.getByText(/메가반점/);
  });
});
