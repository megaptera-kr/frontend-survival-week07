import { render, screen } from '@testing-library/react';
import { Route } from 'react-router-dom';

import { withRouter } from '../../tests/helper';
import RestaurantListPage from '../RestaurantListPage';
import data from '../../data';

describe('Restaurant List Page', () => {
  it('renders restaurant list', () => {
    render(withRouter(<Route path="/" element={<RestaurantListPage />} />));

    expect(screen.getAllByRole('listitem')).toHaveLength(data.restaurants.length);
    data.restaurants.forEach((restaurant) => expect(screen.getByRole('link', { name: restaurant.name })));
  });
});
