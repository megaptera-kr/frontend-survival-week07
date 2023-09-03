import { render, screen } from '@testing-library/react';
import RestaurantTable from '../components/RestaurantTable';
import fixtures from '../../fixtures';

describe('<RestaurantTable />', () => {
  const { restaurants } = fixtures;

  it('render without crash', () => {
    render(<RestaurantTable restaurants={restaurants} />);
    screen.getByText('메가반점');
    screen.getByText(/짜장면/);
  });
});
