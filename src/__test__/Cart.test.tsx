import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

import Cart from '../components/Cart';

import { Menu } from '../types/restaurants';

import fixtures from '../../fixtures';

const state: {menu: Menu[]} = {
  menu: [],
};

jest.mock('../hooks/useCartStore', () => () => [state]);

const context = describe;

describe('<Cart />', () => {
  function renderCart() {
    render((
      <Router>
        <Cart />
      </Router>
    ));
  }

  it('render without crash', () => {
    renderCart();
    screen.getByText(/주문내역/);
    screen.getByText('주문하기');
  });

  context('When an item is in the cart ', () => {
    const { foods } = fixtures;

    beforeEach(() => {
      state.menu = foods;
    });

    it('render cart info and list', () => {
      renderCart();
      foods.forEach((food) => screen.getByText(new RegExp(food.name)));
      screen.getByText(/2개/);
    });
  });
});
