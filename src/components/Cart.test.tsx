import { screen } from '@testing-library/react';
import { renderWithProviders } from '../testHelper';
import Cart from './Cart';
import Food from '../types/Food';
import foods from '../../fixtures/foods';

const state: {menu: Food[]} = {
  menu: [],
};

jest.mock('../hooks/useCartStore.tsx', () => () => [state]);

const context = describe;

describe('Cart', () => {
  it('renders Cart', () => {
    renderWithProviders(<Cart />, { path: '/order' });

    screen.getByText(/주문내역/);
    screen.getByText(/총 결제 예상금액/);
  });

  context('without selected menu', () => {
    beforeEach(() => {
      state.menu = [];
    });

    it('renders zero count', () => {
      renderWithProviders(<Cart />, { path: '/order' });

      screen.getByText(/0개/);
    });
  });

  context('with selected menu', () => {
    beforeEach(() => {
      state.menu = foods;
    });

    it('renders selected food list and count', () => {
      renderWithProviders(<Cart />, { path: '/order' });

      foods.forEach((food) => {
        screen.getByText(new RegExp(food.name));
      });

      screen.getByText(/2개/);
    });
  });
});
