import { render, screen } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

describe('RestaurantDetail', () => {
  const DUMMY_RESTAURANT = {
    id: 1,
    category: '중식',
    name: '메가반점',
    menu: [
      { id: 1, name: '짜장면', price: 8000 },
      { id: 2, name: '짬뽕', price: 8000 },
      { id: 3, name: '차돌짬뽕', price: 9000 },
      { id: 4, name: '탕수육', price: 14000 },
    ],
  };

  function renderRestaurantDetail() {
    render(<RestaurantDetail restaurant={DUMMY_RESTAURANT} />);
  }

  it('should render the restaurant name', () => {
    renderRestaurantDetail();
    expect(screen.getByText(DUMMY_RESTAURANT.name)).toBeInTheDocument();
  });

  it('should render the category', () => {
    renderRestaurantDetail();
    expect(screen.getByText(DUMMY_RESTAURANT.category)).toBeInTheDocument();
  });

  it('should render the menu', () => {
    renderRestaurantDetail();
    DUMMY_RESTAURANT.menu.forEach(({ name }) => {
      const menuName = new RegExp(name);
      screen.getAllByText(menuName);
    });
  });

  it('should render the select button', () => {
    renderRestaurantDetail();
    expect(screen.getAllByRole('button', { name: '선택' })).toHaveLength(DUMMY_RESTAURANT.menu.length);
  });
});
