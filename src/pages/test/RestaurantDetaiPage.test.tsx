import { render, screen } from '@testing-library/react';
import { Route } from 'react-router-dom';

import RestaurantsDetailPage from '../RestaurantDetailPage';
import { withRouter } from '../../tests/helper';
import data from '../../data';

describe('Restaurant Detail Page', () => {
  it('renders restaurant detail by ID', () => {
    render(withRouter(
      <>
        <Route path="/" element={<RestaurantsDetailPage />} />
        <Route path="/:id" element={<RestaurantsDetailPage />} />
      </>,
      '/1',
    ));

    const { category, name, menu } = data.restaurants[0];

    expect(screen.getByText(category)).toBeInTheDocument();
    expect(screen.getByText(name)).toBeInTheDocument();
    menu.forEach((food) => expect(screen.getByText(`${food.name}(${food.price.toLocaleString()})`)).toBeInTheDocument());
  });
});
