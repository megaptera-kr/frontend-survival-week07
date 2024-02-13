import { render, screen, waitFor } from '@testing-library/react';
import Receipt from './Receipt';

jest.mock('../../hooks/useFetchOreder');
describe('Receipt', () => {
  it('render Receipt', async () => {
    render(<Receipt orderId="pp" />);
    await waitFor(() => {
      screen.getByText(/주문이 완료되었습니다!/);
    });
  });
});
