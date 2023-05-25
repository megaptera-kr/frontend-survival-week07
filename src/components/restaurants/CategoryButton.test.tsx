import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import CategoryButton from './CategoryButton';

const context = describe;

describe('CategoryButton', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const handleClick = jest.fn();
  function renderCategoryButton() {
    render(<CategoryButton name="전체" handleClick={handleClick} />);
  }
  context('name="전체", handleClick props를 전달해주면', () => {
    it('"전체" 버튼이 렌더링 된다.', () => {
      renderCategoryButton();

      expect(screen.getByRole('button', { name: '전체' })).toBeInTheDocument();
    });
  });
  context('사용자가 버튼을 클릭하면', () => {
    it('handleClick이 호출된다.', async () => {
      renderCategoryButton();

      const button = screen.getByRole('button', { name: '전체' });

      fireEvent.click(button);

      await waitFor(() => {
        expect(handleClick).toBeCalled();
      });
    });
  });
});
