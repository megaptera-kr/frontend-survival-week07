/* eslint-disable comma-dangle */
import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router';

import Cart from './Cart';

import foods from '../../fixtures/foods';

import Food from '../types/Food';

const context = describe;

const state: { menu: Food[] } = {
  menu: [],
};

jest.mock('../hooks/useCartStore', () => () => [state]);

describe('Cart', () => {
  function renderCart() {
    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );
  }

  it('renders summary', () => {
    renderCart();

    screen.getByText(/주문내역/);
    screen.getByText(/총 결제 예상금액/);
  });

  context('without selected menu', () => {
    beforeEach(() => {
      state.menu = [];
    });
    it('renders zero count', () => {
      renderCart();

      screen.getByText(/0개/);
    });
  });

  context('with selected menu', () => {
    beforeEach(() => {
      state.menu = foods;
    });

    it('renders selected food list and count', () => {
      renderCart();

      foods.forEach((food) => {
        screen.getByText(new RegExp(food.name));
      });
      screen.getByText(/2개/);
    });
  });
});
