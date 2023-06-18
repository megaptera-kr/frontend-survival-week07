import { fireEvent, render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router';

import OperationButtons from './OperationButtons';

const context = describe;

const onClickOrder = jest.fn();
const onClickCancel = jest.fn();

const renderOperationButtons = () => render(
  <MemoryRouter initialEntries={['/']}>
    <OperationButtons
      onClickCancel={onClickCancel}
      onClickOrder={onClickOrder}
    />
  </MemoryRouter>,
);
describe('<OperationButtons />', () => {
  it('render opreator buttons', () => {
    renderOperationButtons();

    screen.getByRole('button', { name: /취소/ });
    screen.getByRole('button', { name: /주문하기/ });
  });

  context('click "취소" button', () => {
    it('redirect homepage', () => {
      renderOperationButtons();

      fireEvent.click(screen.getByRole('button', { name: /취소/ }));

      expect(onClickCancel).toHaveBeenCalled();
    });
  });

  context('click "주문하기" button', () => {
    it('execute onClickOrder function', () => {
      renderOperationButtons();

      fireEvent.click(screen.getByRole('button', { name: /주문하기/ }));

      expect(onClickOrder).toHaveBeenCalled();
    });
  });
});
