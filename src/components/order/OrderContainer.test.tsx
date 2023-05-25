import { render, screen, waitFor } from '@testing-library/react';
import { container } from 'tsyringe';
import OrderContainer from './OrderContainer';

const context = describe;

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as object,
  useNavigate: jest.fn(),
  useSearchParams: () => [new URLSearchParams({ orderId: '12345678910' })],
}));

describe('OrderContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    container.clearInstances();
  });

  function renderOrderContainer() {
    render(<OrderContainer />);
  }
  context('주문완료 데이터가 불러오기 전', () => {
    it('"주문완료 내역을 조회중 입니다."가 렌더링 된다.', () => {
      renderOrderContainer();

      expect(screen.getByText('주문완료 내역을 조회중 입니다.')).toBeInTheDocument();
    });
  });
  context('주문완료 데이터가 불러온 후', () => {
    it('주문완료 내역이 렌더링 된다.', async () => {
      renderOrderContainer();

      await waitFor(() => {
        expect(screen.getByText('주문이 완료되었습니다!')).toBeInTheDocument();
        expect(screen.getByText(/12345678910/)).toBeInTheDocument();
      });
    });
  });
});
