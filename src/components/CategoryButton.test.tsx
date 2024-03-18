import { render, screen, fireEvent } from '@testing-library/react';

import CategoryButton from './CategoryButton';

const context = describe;

describe('CategoryButton', () => {
  const mockSetCategoryName = jest.fn();

  const rendering = (categoryName: string) => {
    render(
      <CategoryButton
        categoryName={categoryName}
        setCategoryName={mockSetCategoryName}
      />,
    );
  };

  context('render correclty - category name is 전체', () => {
    it('전체 버튼이 렌더링 된다.', () => {
      const categoryName = '전체';
      rendering(categoryName);

      screen.getByRole('button', { name: categoryName });
    });

    context('render correclty - category name is 한식', () => {
      it('한식 버튼이 렌더링 된다.', () => {
        const categoryName = '한식';
        rendering(categoryName);

        screen.getByRole('button', { name: categoryName });
      });
    });

    context('button click event - category name is 한식', () => {
      it('한식 버튼이 클릭된다.', () => {
        const categoryName = '한식';
        rendering(categoryName);

        const button = screen.getByRole('button', { name: categoryName });
        fireEvent.click(button);

        expect(mockSetCategoryName).toHaveBeenCalled();
        expect(mockSetCategoryName).toHaveBeenCalledWith(categoryName);
      });
    });
  });
});
