import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import Button from './Button';

const context = describe;

describe('Button', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const handleClick = jest.fn();
  function renderButton() {
    render(<Button name="주문하기" handleClick={handleClick} />);
  }
  context('name="주문하기", handleClick props를 전달해주면', () => {
    it('"주문하기" 버튼이 렌더링 된다.', () => {
      renderButton();

      expect(screen.getByRole('button', { name: '주문하기' })).toBeInTheDocument();
    });
  });
  context('사용자가 버튼을 클릭하면', () => {
    it('handleClick이 호출된다.', async () => {
      renderButton();

      const button = screen.getByRole('button', { name: '주문하기' });

      fireEvent.click(button);

      await waitFor(() => {
        expect(handleClick).toBeCalled();
      });
    });
  });
});
