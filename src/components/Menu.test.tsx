import { render, screen } from '@testing-library/react';

import MenuItemModel from '../models/MenuItemModel';
import MenuType from '../types/MenuType';

import fixtures from '../../fixtures';
import Menu from './Menu';
import RestaurantModel from '../models/RestaurantModel';

const context = describe;

describe('', () => {
  let menuItems: MenuItemModel[] = [];
  let restaurant: RestaurantModel;

  const { menu, restaurants } = fixtures;

  beforeEach(() => {
    menuItems = menu.map((item: MenuType) => new MenuItemModel(item));
    restaurant = new RestaurantModel(restaurants[0]);
  });

  context('menu is exists', () => {
    it('메뉴 목록이 정상적으로 표시된다.', () => {
      render(<Menu menu={menuItems} restaurant={restaurant} />);

      menuItems.forEach((item: MenuItemModel) => {
        screen.queryByText(item.getNamePrice());
      });
    });
  });

  context('menu is not exists', () => {
    it('판매할 수 있는 메뉴가 없습니다 문구가 표시된다.', () => {
      render(<Menu menu={[]} restaurant={restaurant} />);

      screen.getByText(/^판매할 수 있는 메뉴가 없습니다.$/);
    });
  });
});
