import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../testHelper';

import Cart from './index';

import Food from '../../types/Food';

import fixtures from '../../../fixtures';

import PATHNAME from '../../constants/pathname';

const state: { menu: Food[] } = {
  menu: [],
};

jest.mock('../../hooks/useCartStore', () => () => [state]);

const context = describe;

describe('Cart 컴포넌트', () => {
  it('렌더링', () => {
    renderWithProviders(<Cart />, { path: PATHNAME.Order });

    screen.getByText(/주문내역/);
    screen.getByText(/총 결제 예상금액/);
  });

  context('주문이 없을때', () => {
    beforeEach(() => {
      state.menu = [];
    });

    it('renders zero count', () => {
      renderWithProviders(<Cart />, { path: PATHNAME.Order });

      screen.getByText(/0개/);
    });
  });

  context('주문이 있을때', () => {
    const { foods } = fixtures;

    beforeEach(() => {
      state.menu = foods;
    });

    it('renders selected food list and count', () => {
      renderWithProviders(<Cart />, { path: PATHNAME.Order });

      foods.forEach((food) => {
        screen.getByText(new RegExp(food.name));
      });

      screen.getByText(/3개/);
    });
  });
});
