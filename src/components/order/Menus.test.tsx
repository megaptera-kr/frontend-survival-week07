import { screen } from '@testing-library/react';

import { useRender } from '../../testHelper';

import Menus from './Menus';

import fixtures from '../../../fixtures';

const context = describe;

describe('Menus 컴포넌트', () => {
  const { receipt } = fixtures;

  context('렌더링', () => {
    it('타이틀과 리스트를 보여줘야한다.', () => {
      useRender(<Menus order={receipt} />);

      const { menu, totalPrice } = receipt;

      screen.getByText(/주문목록/);

      menu.forEach((food) => screen.getByText(new RegExp(food.name)));

      screen.getByText(new RegExp(`${totalPrice.toLocaleString()}원`));
    });
  });
});
