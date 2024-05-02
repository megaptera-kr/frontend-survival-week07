import { render, screen } from '@testing-library/react';
import Receipt from '.';

const goToIntro = jest.fn();

const context = describe;
describe('Receipt 컴포넌트', () => {
  beforeEach(() => {
    render(<Receipt goToIntro={goToIntro} />);
  });

  it('올바르게 렌더링 된다.', () => {
    screen.getByText('취소');
    screen.getByText('주문하기');
  });

  context('주문내역이 빈 배열이라면', () => {
    it('주문내역 0개를 렌더링한다.', () => {
      screen.getByText(/주문내역 0개/);
    });
    it('총 결제 예상금액 0원을 렌더링한다.', () => {
      screen.getByText(/총 결제 예상금액 0원/);
    });
  });
});
