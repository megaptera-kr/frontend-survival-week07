import { render, screen } from '@testing-library/react';
import MenuController from './MenuController';

describe('MenuController', () => {
  const setQuery = jest.fn();
  const setCategory = jest.fn();
  const query = '';
  const categories = ['딸기', '포도', '수박'];
  it('검색 버튼이 보인다.', () => {
    render(
      <MenuController
        setQuery={setQuery}
        setCategory={setCategory}
        query={query}
        categories={categories}
      />,
    );
    expect(screen.getByText('검색')).toBeInTheDocument();
  });

  it('전체 버튼이 보인다', () => {
    render(
      <MenuController
        setQuery={setQuery}
        setCategory={setCategory}
        query={query}
        categories={categories}
      />,
    );
    expect(screen.getByText('전체')).toBeInTheDocument();
  });
});
