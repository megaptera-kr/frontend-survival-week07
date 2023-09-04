import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

const context = describe;

const setFilterText = jest.fn();

describe('<SearchBar />', () => {
  it('render label "검색"', () => {
    render(<SearchBar
      filterText=""
      setFilterText={setFilterText}
    />);

    screen.getByLabelText(/검색/);
  });

  context('type search text in search input', () => {
    it('execute change handler function', () => {
      const filterText = 'keyword';

      render(<SearchBar
        filterText=""
        setFilterText={setFilterText}
      />);

      const searchInput = screen.getByLabelText(/검색/);

      fireEvent.change(searchInput, { target: { value: filterText } });

      expect(setFilterText).toHaveBeenCalledWith(filterText);
    });
  });
});
