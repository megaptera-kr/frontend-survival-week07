import { screen, fireEvent } from '@testing-library/react';

import { useRender } from '../../testHelper';

import categories from '../../constants/categories';

import Categories from './Categories';

const context = describe;

const handleClickCategory = jest.fn();

jest.mock('../../hooks/useClickCategories', () => () => ({
  handleClickCategory,
}));

describe('카테고리 컴포넌트', () => {
  context('렌더링', () => {
    it('모든 카테고리 버튼이 보여야 한다.', () => {
      useRender(<Categories />);

      categories.forEach((category) => {
        const categoryText = screen.getByText(category);

        expect(categoryText).toBeInTheDocument();
      });
    });
  });

  context('handleClickCategory 함수호출 테스트', () => {
    beforeEach(() => {
      handleClickCategory.mockClear();
    });

    categories.forEach((category) => {
      it('카테고리버튼이 클릭 될때마다 호출되어야한다.', () => {
        useRender(<Categories />);

        const categoryButton = screen.getByText(category);

        fireEvent.click(categoryButton);

        expect(handleClickCategory.mock.calls[0][0].target.value).toBe(
          category,
        );
      });
    });
  });
});
