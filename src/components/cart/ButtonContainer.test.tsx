import { render, screen } from '@testing-library/react';
import ButtonContainer from './ButtonContainer';

describe('ButtonContainer', () => {
  function renderButton() {
    render(<ButtonContainer />);
  }
  it('"전체취소", "주문하기" 버튼이 렌더링 된다', () => {
    renderButton();

    expect(screen.getByRole('button', { name: '전체취소' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '주문하기' })).toBeInTheDocument();
  });
});
