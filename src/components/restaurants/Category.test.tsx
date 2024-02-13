import { fireEvent, render, screen } from '@testing-library/react';
import CategoryBtn from './CategoryBtn';

const context = describe;
describe('CategoryBtn', () => {
  const setCategory = jest.fn();

  const renderAndClick = (category: string) => {
    render(<CategoryBtn category={category} setCategory={setCategory} />);
    const button = screen.getByText(new RegExp(category));
    fireEvent.click(button);
  };

  const categories = ['전체', '딸기', '포도', '수박'];

  categories.forEach((category) => {
    context('category가 prop으로 전달되어 클릭하면', () => {
      it('category가 전달된다.', () => {
        renderAndClick(category);
        expect(setCategory).toHaveBeenCalledWith(category);
      });
    });
  });
});
