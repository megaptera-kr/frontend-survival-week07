import { render, screen, fireEvent } from '@testing-library/react';

import useCartStore from '../hooks/useCartStore';

import MenuItem from './MenuItem';

import MenuItemModel from '../models/MenuItemModel';
import RestaurantModel from '../models/RestaurantModel';

import fixtures from '../../fixtures';

const context = describe;

jest.mock('../hooks/useCartStore');

describe('MenuItem', () => {
  let menuItem: MenuItemModel;
  let restaurant: RestaurantModel;

  const { restaurants, menu } = fixtures;

  beforeEach(() => {
    menuItem = new MenuItemModel(menu[0]);
    restaurant = new RestaurantModel(restaurants[0]);
  });

  const rendering = () => {
    render(<MenuItem menuItem={menuItem} restaurant={restaurant} />);
  };

  context('When MenuItem render', () => {
    it('메뉴 아이템의 이름과 가격이 정상적으로 표시된다.', () => {
      rendering();

      const nameAndPrice: string = menuItem.getNamePrice();

      screen.getByText(nameAndPrice);
      screen.getByRole('button', { name: nameAndPrice });
    });
  });

  context('When a menuitem button click', () => {
    it('메뉴 아이템의 버튼이 정상적으로 클릭된다.', () => {
      const mockCartStoreInstance = {
        cart: jest.fn(),
        addItem: jest.fn(),
      };
      (useCartStore as jest.Mock).mockReturnValue([
        mockCartStoreInstance.cart,
        mockCartStoreInstance,
      ]);

      rendering();

      const button = screen.getByRole('button', {
        name: menuItem.getNamePrice(),
      });

      fireEvent.click(button);

      expect(mockCartStoreInstance.addItem).toHaveBeenCalled();
    });
  });
});
