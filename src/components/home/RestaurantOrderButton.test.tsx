import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import RestaurantOrderButton from './RestaurantOrderButton';

const context = describe;

describe('RestaurantOrderButton', () => {
  const handleClickOrder = jest.fn();

  function renderOrderButton(name: string) {
    render(
      <RestaurantOrderButton
        name={name}
        handleClickOrder={handleClickOrder}
      />,
    );
  }

  context('name="매장 주문"을 전달해주면', () => {
    it('"매장 주문"버튼이 렌더링 된다.', () => {
      renderOrderButton('매장 주문');

      expect(screen.getByRole('button', { name: '매장 주문' })).toBeInTheDocument();
    });
  });

  context('사용자가 버튼을 클릭하면', () => {
    it('handleClickOrder가 호출된다.', async () => {
      renderOrderButton('매장 주문');

      const button = screen.getByRole('button', { name: '매장 주문' });

      fireEvent.click(button);

      await waitFor(() => {
        expect(handleClickOrder).toBeCalled();
      });
    });
  });
});
