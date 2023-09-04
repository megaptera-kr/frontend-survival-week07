import { render, screen } from '@testing-library/react';

import SearchBar from '../components/SearchBar';

describe('<FilterTextField />', () => {
  const categories = ['중식', '한식', '일식'];
  const query = '';
  const setQuery = jest.fn();
  const setCategory = jest.fn();

  it('render without crash', () => {
    render(<SearchBar
      categories={categories}
      query={query}
      setQuery={setQuery}
      setCategory={setCategory}
    />);

    screen.getByText('전체');
    categories.forEach((category) => screen.getByText(category));
  });
});
