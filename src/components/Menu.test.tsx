import { render, screen } from '@testing-library/react';
import Menu from './Menu';

import foods from '../../fixtures/foods';
import Food from '../types/Food';

const context = describe;

describe('Menu', () => {
  context('with menu', () => {
    const menu = foods;

    it('renders Menu', () => {
      render((
        <Menu menu={menu} />
      ));

      screen.getByText('짜장면');
      screen.getByText('짬뽕');
    });
  });

  context('without menu', () => {
    const menu: Food[] = [];

    it('renders no foods message', () => {
      render(<Menu menu={menu} />);

      screen.getByText(/메뉴가 존재하지 않습니다/);
    });
  });
});
