import { render, screen } from '@testing-library/react';
import SearchBar from '.';

describe('SearchBar 컴포넌트', () => {
  const categories = ['전체'];

  beforeEach(() => {
    render(<SearchBar categories={categories} />);
  });

  it('올바르게 렌더링된다.', () => {
    screen.getByLabelText('검색');
    screen.getByPlaceholderText('식당 이름을 입력해주세요');
  });

  it('category로 된 button을 렌더링한다.', () => {
    const categoryButtons = screen.getAllByRole('button');
    categoryButtons.forEach((categoryButton, index) => {
      expect(categoryButton.textContent).toBe(categories[index]);
    });
  });
});
