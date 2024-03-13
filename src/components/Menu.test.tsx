import { render, screen } from '@testing-library/react';

import MenuModel from '../models/MenuModel';
import MenuType from '../types/MenuType';

import fixtures from '../../fixtures';
import Menu from './Menu';

const context = describe;

describe('', () => {
  let menu: MenuModel[] = [];

  beforeEach(() => {
    menu = fixtures.menu.map((item: MenuType) => new MenuModel(item));
  });

  context('menu is exists', () => {
    it('메뉴 목록이 정상적으로 표시된다.', () => {
      render(<Menu menu={menu} />);

      menu.forEach((item: MenuModel) => {
        screen.queryByText(item.getNamePrice());
      });
    });
  });

  context('menu is not exists', () => {
    it('판매할 수 있는 메뉴가 없습니다 문구가 표시된다.', () => {
      render(<Menu menu={[]} />);

      screen.getByText(/^판매할 수 있는 메뉴가 없습니다.$/);
    });
  });
});
