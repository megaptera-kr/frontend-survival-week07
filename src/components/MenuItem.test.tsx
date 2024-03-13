import { render, screen, fireEvent } from '@testing-library/react';

import MenuItem from './MenuItem';

import MenuModel from '../models/MenuModel';

import fixtures from '../../fixtures';

const context = describe;

describe('MenuItem', () => {
  let model: MenuModel;

  beforeEach(() => {
    model = new MenuModel(fixtures.menu[0]);
  });

  const rendering = () => {
    render(<MenuItem menuItem={model} />);
  };

  context('When MenuItem render', () => {
    it('메뉴 아이템의 이름과 가격이 정상적으로 표시된다.', () => {
      rendering();

      const nameAndPrice: string = model.getNamePrice();

      screen.getByText(nameAndPrice);
      screen.getByRole('button', { name: nameAndPrice });
    });
  });

  context('When a menuitem button click', () => {
    it('메뉴 아이템의 버튼이 정상적으로 클릭된다.', () => {
      rendering();

      const button = screen.getByRole('button', {
        name: model.getNamePrice(),
      });

      fireEvent.click(button);

      // TODO: check called a function
    });
  });
});
