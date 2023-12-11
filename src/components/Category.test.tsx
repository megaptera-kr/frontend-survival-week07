import { render, screen, fireEvent } from '@testing-library/react';
import Category from './Category';

describe('Category', () => {
  const categoryList = ['중식', '한식', '일식'];
  const setCategory = jest.fn();
  function renderCategory() {
    render(<Category categoryList={categoryList} setCategory={setCategory} />);
  }

  it('renders Category', () => {
    renderCategory();
    screen.getByText('한식');
    categoryList.forEach((category) => {
      screen.getByText(category);
    });
  });

  it('listens for category click event', () => {
    renderCategory();
    fireEvent.click(screen.getByText('한식'));
    expect(setCategory).toHaveBeenCalledWith('한식');
  });
});
