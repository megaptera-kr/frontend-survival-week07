/* eslint-disable comma-dangle */
import { render, screen } from '@testing-library/react';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
  const filterText = '메가반점';
  const catagories = ['한식', '일식', '중식'];
  const setFilterText = jest.fn();
  const setFilterCategory = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderSearchBar() {
    render(
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        catagories={catagories}
        setFilterCategory={setFilterCategory}
      />
    );
  }

  it('renders search label text', () => {
    renderSearchBar();
    screen.getByText(/검색/);
  });

  it('renders all categories', () => {
    renderSearchBar();
    screen.getByText('전체');

    catagories.forEach((category) => {
      screen.getByText(category);
    });
  });
});
