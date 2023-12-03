import { fireEvent, screen, waitFor } from '@testing-library/react';

import { renderWithProviders } from '../../testHelper';

import Order from './index';

import fixtures from '../../../fixtures';

import PATHNAME from '../../constants/pathname';

const context = describe;

describe('Order 컴포넌트', () => {
  const { receipt } = fixtures;

  const orderId = receipt.id;

  const handleClickBack = jest.fn();

  context('렌더링', () => {
    it('메세지가 출력되어야한다.', async () => {
      renderWithProviders(
        <Order orderId={orderId} handleClickBack={handleClickBack} />,
        { path: `${PATHNAME.OrderComplete}?orderId=${orderId}` },
      );

      await waitFor(() => {
        screen.getByText(/주문이 완료되었습니다!/);
        screen.getByText(/갈비탕/);
        screen.getByText(/짬뽕/);
      });
    });
  });

  context('돌아가기 버튼', () => {
    it('돌아가기 버튼을 누르면 함수가 호출되어야 한다.', () => {
      renderWithProviders(
        <Order orderId={orderId} handleClickBack={handleClickBack} />,
        { path: `${PATHNAME.OrderComplete}?orderId=${orderId}` },
      );

      const backButton = screen.getByText('메인화면으로 돌아가기');

      fireEvent.click(backButton);

      expect(handleClickBack).toBeCalled();
    });
  });
});
