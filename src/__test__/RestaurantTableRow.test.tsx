import { render, screen } from '@testing-library/react';
import RestaurantTableRow from '../components/RestaurantTableRow';
import fixtures from '../../fixtures';

describe('<RestaurantTableRow />', () => {
  const { restaurants } = fixtures;

  it('render restaurant row', () => {
    render((
      <table>
        <tbody>
          <RestaurantTableRow restaurant={restaurants[0]} />
        </tbody>
      </table>
    ));
    screen.getByText('메가반점');
    screen.getByText(/짜장면/);
  });
});
