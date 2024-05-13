import { fireEvent, render, screen } from '@testing-library/react';
import CategoryFilter from '.';

const context = describe;
describe('CategoryFilter 컴포넌트', () => {
  const categories = ['전체', '한식'];
  let selectedCategory = '전체';
  const setSelectedCategory = jest.fn();

  context('categories props를 전달받으면', () => {
    beforeEach(() => {
      render(<CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />);
    });
    it('category로 된 button을 렌더링한다.', () => {
      const categoryButtons = screen.getAllByRole('button');
      categoryButtons.forEach((categoryButton, index) => {
        expect(categoryButton.textContent).toBe(categories[index]);
      });
    });
  });

  context('한식 버튼을 클릭하면', () => {
    beforeEach(() => {
      render(<CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />);
      // 버튼을 클릭해도 setSelectedCategory는 mock 함수이므로
      // selectedCategory 상태를 변경해주지 못한다.
      fireEvent.click(screen.getByText('한식'));
      selectedCategory = '한식';
    });

    it('setSelectedCategory가 호출된다.', () => {
      expect(setSelectedCategory).toHaveBeenCalledTimes(1);
    });
    it('한식 버튼의 글자 색상이 빨간색이 된다.', () => {
      expect(screen.getByText('한식')).toHaveStyle('color:red');
    });
  });
});
