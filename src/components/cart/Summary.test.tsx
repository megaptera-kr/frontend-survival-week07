import { screen } from '@testing-library/react';

import { useRender } from '../../testHelper';

import Summary from './Summary';

import fixtures from '../../../fixtures';

import Food from '../../types/Food';

const context = describe;

const state: { menu: Food[] } = {
  menu: [],
};

jest.mock('../../hooks/useCartStore', () => () => [state]);

describe('Summary 컴포넌트', () => {
  context('렌더링', () => {
    beforeEach(() => {
      const { foods } = fixtures;
      state.menu = foods;
    });

    it('order empty case', () => {
      useRender(<Summary />);

      const text = screen.getByText(/주문내역 3개/);

      expect(text).toBeInTheDocument();
    });
  });
});
