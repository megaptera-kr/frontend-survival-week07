import { render, screen } from '@testing-library/react';
import Message from './Message';

import fixtures from '../../fixtures';
import Order from '../types/Order';

const context = describe;

describe('Message', () => {
  context('with order Id', () => {
    const { order } = fixtures;

    it('renders result message', () => {
      render(<Message order={order} />);

      screen.getByText(/주문이 완료되었습니다!/);
      screen.getByText(/주문번호/);
    });
  });

  context('without order ID', () => {
    const order = {} as Order;

    it('renders guide message', () => {
      render(<Message order={order} />);

      screen.getByText(/주문을 진행해주세요!/);
    });
  });
});
