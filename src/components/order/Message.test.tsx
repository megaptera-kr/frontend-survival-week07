import { screen } from '@testing-library/react';

import { useRender } from '../../testHelper';

import Message from './Message';

import Order from '../../types/Order';

import fixtures from '../../../fixtures';

const context = describe;

describe('Message 컴포넌트', () => {
  context('주문 있을때', () => {
    const { receipt } = fixtures;

    it('결과값을 보여줘야한다.', () => {
      useRender(<Message order={receipt} />);

      screen.getByText(/주문이 완료되었습니다!/);
      screen.getByText(/주문번호/);
    });
  });

  context('주문이 없을때.', () => {
    const order = {} as Order;

    it('주문을 하라는 메세지를 보여줘야한다.', () => {
      useRender(<Message order={order} />);

      screen.getByText(/주문을 진행해주세요!/);
    });
  });
});
