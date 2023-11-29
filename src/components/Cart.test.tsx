import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Cart from './Cart';
import fixtures from '../fixtures';
import type Food from '../types/Food';

const state: { menu: Food[] } = {
  menu: [],
};

jest.mock('../hooks/useMenuStore', () => () => [state]);

const context = describe;

function renderCart() {
  render(
    <MemoryRouter>
      <Cart />
    </MemoryRouter>,
  );
}

describe('Cart', () => {
  it('renders Cart', () => {
    renderCart();

    screen.getByText(/메뉴/);
    screen.getByText(/총 결제 예상금액/);
    screen.getByText('취소');
    screen.getByText('주문하기');
  });

  context('without selected Menu', () => {
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
      state.menu = fixtures.foods;
    });

    it('renders selected food list and count', () => {
      renderCart();

      fixtures.foods.forEach((food) => {
        screen.getByText(new RegExp(food.name));
      });

      screen.getByText(/2개/);
    });
  });
});
