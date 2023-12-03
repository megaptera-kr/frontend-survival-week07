import { fireEvent, screen } from '@testing-library/react';

import { useRender } from '../../testHelper';

import CTAButtons from './CTAButtons';

const context = describe;

const handleClickCancel = jest.fn();
const handleClickOrder = jest.fn();

jest.mock('../../hooks/useCartCTAButtons', () => () => ({
  handleClickCancel,
  handleClickOrder,
}));

describe('CTABUttons 컴포넌트', () => {
  context('각각 버튼을 클릭하면', () => {
    beforeEach(() => {
      handleClickCancel.mockClear();
      handleClickOrder.mockClear();
    });

    it('특정 함수가 호출되어야 한다.', () => {
      useRender(<CTAButtons />);

      const orderButton = screen.getByText(/주문하기/);

      const cancelButton = screen.getByText(/취소/);

      fireEvent.click(orderButton);

      expect(handleClickOrder).toBeCalled();

      fireEvent.click(cancelButton);

      expect(handleClickCancel).toBeCalled();
    });
  });
});
