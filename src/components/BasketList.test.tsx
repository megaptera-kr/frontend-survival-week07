import { screen, render, fireEvent } from '@testing-library/react';

import BasketList from './BasketList';

import { Menu } from '../types/restaurants';

const state: {
  basket: Menu[]
  totalCount: number
  totalPrice: number
} = {
  basket: [],
  totalCount: 0,
  totalPrice: 0,
};
jest.mock('../hooks/useBasketStore', () => () => [state]);

const context = describe;

describe('BasketList', () => {
  const onClickRemove = jest.fn();
  function renderBasketList(list: Menu[]) {
    render((
      <BasketList
        list={list}
        onClickRemove={onClickRemove}
      />
    ));
  }

  context('list가 없을 때', () => {
    it('비어있는 장바구니를 렌더링 한다.', () => {
      renderBasketList([]);

      expect(screen.queryByRole('listitem')).toBeNull();
    });
  });

  context('list가 있을 때', () => {
    const list = [
      { id: '1', name: '짜장면', price: 7000 },
      { id: '2', name: '짬뽕', price: 7000 },
    ];

    it('장바구니에 담긴 메뉴를 렌더링 한다.', () => {
      renderBasketList(list);

      screen.getByText(/짜장면/);
      screen.getByText(/짬뽕/);
    });
  });

  context('X 버튼을 클릭했을 때', () => {
    it('onClickRemove 함수를 listItem을 인자로 호출 한다.', () => {
      const list = [
        { id: '1', name: '짜장면', price: 7000 },
        { id: '2', name: '짬뽕', price: 7000 },
      ];
      renderBasketList(list);

      fireEvent.click(screen.getAllByRole('button')[0]);
      expect(onClickRemove).toBeCalledWith(0);
    });
  });
});
