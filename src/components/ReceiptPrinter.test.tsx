/* eslint-disable comma-dangle */
import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router';
import ReceiptPrint from './ReceiptPrinter';

describe('ReceiptPrinter', () => {
  const order = {
    id: '12345678910',
    menu: [
      { id: '1', name: '짜장면', price: 8000 },
      { id: '5', name: '제육김밥', price: 5500 },
    ],
    totalPrice: 13500,
  };

  function renderReceiptPrinter() {
    render(
      <MemoryRouter>
        <ReceiptPrint order={order} />
      </MemoryRouter>
    );
  }

  it('renders receipt', () => {
    renderReceiptPrinter();

    screen.getByText(/주문이 완료되었습니다/);
    screen.getByText(/13,500/);
    screen.getByText('메인화면으로 돌아가기');
  });
});
