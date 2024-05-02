import { render, screen } from '@testing-library/react';
import CategoryFilter from '.';

const context = describe;
describe('CategoryFilter 컴포넌트', () => {
  const categories = ['전체', '한식'];
  context('categories props를 전달받으면', () => {
    beforeEach(() => {
      render(<CategoryFilter categories={categories} />);
    });

    it('category로 된 button을 렌더링한다.', () => {
      const categoryButtons = screen.getAllByRole('button');
      categoryButtons.forEach((categoryButton, index) => {
        expect(categoryButton.textContent).toBe(categories[index]);
      });
    });
  });
});
