import { render, screen } from '@testing-library/react';

import Restaurants from './Restaurants';

import restaurants from '../../fixtures/restaurants';
import Restaurant from '../Types/Restaurant';

const context = describe;

describe('Restaurant', () => {
  context('without  restaurants', () => {
    const emptyRestaurants: Restaurant[] = [];
    it('renders no restaurants message', () => {
      render(<Restaurants restaurants={emptyRestaurants} />);

      screen.getByText(/식당이 존재하지 않습니다./);
    });
  });
  context('with restaurants', () => {
    it('renders Restaurants list', () => {
      render(<Restaurants restaurants={restaurants} />);

      screen.getByText(/메가반점/);
      screen.getByText(/고래/);
      screen.getByText(/짜장면/);
      screen.getByText(/8,000원/);
      screen.getByText(/3,000/);
    });
  });
});
