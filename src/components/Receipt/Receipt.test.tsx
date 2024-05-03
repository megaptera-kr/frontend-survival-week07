import { fireEvent, render, screen } from '@testing-library/react';
import Receipt from '.';
import fixture from '../../fixture';

let menu = fixture.food;

const clearCart = jest.fn();

jest.mock('../../hook/useCartStore', () => () => [
  { menu },
  { clearCart },
]);

const goToIntro = jest.fn();

const context = describe;
describe('Receipt 컴포넌트', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('올바르게 렌더링 된다.', () => {
    render(<Receipt goToIntro={goToIntro} />);
    screen.getByText('취소');
    screen.getByText('주문하기');
  });

  context('취소버튼을 클릭하면', () => {
    it('인트로 페이지로 이동한다.', () => {
      render(<Receipt goToIntro={goToIntro} />);
      fireEvent.click(screen.getByText('취소'));
      expect(goToIntro).toHaveBeenCalledTimes(1);
    });

    it('주문내역을 초기화한다.', () => {
      const { unmount } = render(<Receipt goToIntro={goToIntro} />);
      unmount();
      expect(clearCart).toHaveBeenCalledTimes(1);
    });
  });

  context('주문내역이 빈 배열이 아니라면', () => {
    beforeEach(() => {
      render(<Receipt goToIntro={goToIntro} />);
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
  });

  context('주문내역이 빈 배열이라면', () => {
    beforeEach(() => {
      menu = [];
      render(<Receipt goToIntro={goToIntro} />);
    });

    it('주문내역 0개를 렌더링한다.', () => {
      screen.getByText(/0개/);
    });
    it('총 결제 예상금액 0원을 렌더링한다.', () => {
      screen.getByText(/0원/);
    });
  });
});
