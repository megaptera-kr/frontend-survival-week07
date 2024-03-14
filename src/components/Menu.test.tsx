import { render, screen } from '@testing-library/react';

import Menu from './Menu';

import foods from '../../fixtures/foods';
import Food from '../Types/Food';

const context = describe;

describe('Menu', () => {
  context('without menu', () => {
    it('renders foods list', () => {
      render(<Menu menus={foods} />);

      screen.getByText(/짜장면/);
      screen.getByText(/8,000원/);
      screen.getByText(/짬뽕/);
      screen.getByText(/5,000원/);
    });
  });
  context('with menu', () => {
    const menus: Food[] = [];

    it('renders no foods message', () => {
      render(<Menu menus={menus} />);

      screen.getByText(/메뉴가 존재하지 않습니다/);
    });
  });
});
