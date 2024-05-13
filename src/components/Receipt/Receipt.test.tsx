import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import Receipt from '.';
import fixture from '../../fixture';

let menu = fixture.food;

const clearCart = jest.fn();

jest.mock('../../hook/useCartStore', () => () => [
  { menu },
  { clearCart },
]);

const goToIntro = jest.fn();
const goToResult = jest.fn();

const context = describe;
function renderReceipt() {
  return render(<Receipt goToIntro={goToIntro} goToResult={goToResult} />);
}
describe('Receipt 컴포넌트', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('올바르게 렌더링 된다.', () => {
    renderReceipt();
    screen.getByText('취소');
    screen.getByText('주문하기');
  });

  context('취소버튼을 클릭하면', () => {
    it('인트로 페이지로 이동한다.', () => {
      renderReceipt();
      fireEvent.click(screen.getByText('취소'));
      expect(goToIntro).toHaveBeenCalledTimes(1);
    });

    it('주문내역을 초기화한다.', () => {
      const { unmount } = renderReceipt();
      unmount();
      expect(clearCart).toHaveBeenCalledTimes(1);
    });
  });

  context('주문내역이 빈 배열이 아니라면', () => {
    beforeEach(() => {
      renderReceipt();
    });

    it('주문한 음식을 렌더링한다.', () => {
      menu.forEach((food) => {
        expect(screen.getByText(new RegExp(food.name))).toBeInTheDocument();
      });
    });
    it('주문한 음식 갯수만큼 X 버튼을 렌더링한다.', () => {
      const xButtons = screen.getAllByText('X');
      expect(xButtons).toHaveLength(menu.length);
    });
    it('주문버튼 클릭하여 결과페이지로 이동한다.', async () => {
      const submitButton = screen.getByText('주문하기');
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(goToResult).toHaveBeenCalledTimes(1);
      });
    });
  });

  context('주문내역이 빈 배열이라면', () => {
    beforeEach(() => {
      menu = [];
      renderReceipt();
    });

    it('주문내역 0개를 렌더링한다.', () => {
      screen.getByText(/0개/);
    });
    it('총 결제 예상금액 0원을 렌더링한다.', () => {
      screen.getByText(/0원/);
    });
    it('주문 버튼클릭해도 아무런 반응이 없다.', () => {
      const submitButton = screen.getByText('주문하기');
      fireEvent.click(submitButton);

      const receipt = screen.queryByText('주문내역');
      expect(receipt).not.toBeInTheDocument();
    });
  });
});
