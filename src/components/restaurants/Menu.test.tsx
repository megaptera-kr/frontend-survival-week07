import { render, screen } from '@testing-library/react';

import Menu from './Menu';
import foods from '../../../fixtures/foods';
import Food from '../../types/Food';

const context = describe;
describe('Menu', () => {
  it('render Menu', () => {
    render(<Menu menu={foods} />);
    screen.getByText(/짜장면/);
    screen.getByText(/짬뽕/);
  });

  context('witout menu', () => {
    const emptyMenu:Food[] = [];
    it('render no food Message', () => {
      render(<Menu menu={emptyMenu} />);
      const list = screen.queryAllByRole('listitem');
      expect(list).toHaveLength(0);
      screen.getByText(/메뉴가 존재하지 않습니다/);
    });
  });
});
