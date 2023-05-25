import { render, screen } from '@testing-library/react';
import fixtures from '../../../fixtures';
import Menu from './Menu';

const context = describe;

describe('Menu', () => {
  function renderMenu() {
    render(<Menu
      name={fixtures.restaurants[0].name}
      menu={fixtures.restaurants[0].menu}
    />);
  }
  context('레스토랑 이름과 메뉴를 전달해주면', () => {
    it('해당 레스토랑 메뉴가 렌더링 된다.', () => {
      renderMenu();

      expect(screen.getByText('메가반점')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '짜장면 8,000원' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '짬뽕 5,000원' })).toBeInTheDocument();
    });
  });
});
