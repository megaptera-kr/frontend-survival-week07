import { render, screen } from '@testing-library/react';

import RestaurantRow from '../RestaurantRow';
import fixtures from '../../../../fixtures';

describe('RestaurantRow', () => {
  const { restaurant } = fixtures;

  it('renders restaurant information', () => {
    render((
      <table>
        <tbody>
          <RestaurantRow restaurant={restaurant} />
        </tbody>
      </table>
    ));

    screen.getByText(/메가반점/);
    screen.getByText(/짜장면/);
  });
});
