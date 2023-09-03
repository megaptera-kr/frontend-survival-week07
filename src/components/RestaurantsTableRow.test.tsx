import { screen, render } from '@testing-library/react';
import RestaurantsTableRow from './RestaurantsTableRow';
import fixtures from '../../fixtures';

describe('RestaurantsTableRow', () => {
  it('가게이름을 렌더링 한다.', () => {
    const restaurant = fixtures.restaurants[0];
    render((
      <table>
        <tbody>
          <RestaurantsTableRow
            restaurant={restaurant}
          />
        </tbody>
      </table>
    ));

    screen.getByText(/메가반점/);
  });
});
