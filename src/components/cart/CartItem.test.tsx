import { fireEvent, screen } from '@testing-library/react';

import { useRender } from '../../testHelper';

import CartItem from './CartItem';

import fixtures from '../../../fixtures';

const context = describe;

const handleClickRemove = jest.fn();

jest.mock('../../hooks/useCartCTAButtons', () => () => ({
  handleClickRemove,
}));

describe('CartItem 컴포넌트', () => {
  const { foods } = fixtures;
  const food = foods[0];
  const index = 1;

  context('아이템 정보를 보여줘야한다.', () => {
    it('짜장면과 가격이 보여져야한다.', () => {
      useRender(<CartItem item={food} index={index} />);

      screen.getByText(/짜장면/);

      screen.getByText(/8,000원/);
    });
  });

  context('아이템의 X버튼을 누르면', () => {
    beforeEach(() => {
      handleClickRemove.mockClear();
    });

    it('클릭 이벤트를 해야한다.', () => {
      useRender(<CartItem item={food} index={index} />);

      const removeButton = screen.getByText('X');

      fireEvent.click(removeButton);

      expect(handleClickRemove).toBeCalledWith(index);
    });
  });
});
