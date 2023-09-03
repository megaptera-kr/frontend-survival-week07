import { fireEvent, render, screen } from '@testing-library/react';

import Categories from './Categories';

const context = describe;

describe('Categories', () => {
  const onClick = jest.fn();

  function renderCategories() {
    const categories = ['한식', '중식', '일식'];
    render((
      <Categories
        categories={categories}
        onClick={onClick}
      />
    ));
  }

  it('categories를 렌더링한다', () => {
    renderCategories();

    screen.getByText(/한식/);
    screen.getByText(/중식/);
    screen.getByText(/일식/);
  });

  context('category를 클릭하면', () => {
    it('category를 인자로 onClick이 호출된다', () => {
      const categories = ['한식', '중식', '일식'];
      render((
        <Categories
          categories={categories}
          onClick={onClick}
        />
      ));

      fireEvent.click(screen.getByText(/한식/));

      expect(onClick).toBeCalledWith('한식');
    });
  });
});
