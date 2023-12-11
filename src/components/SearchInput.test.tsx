import { render, screen, fireEvent } from '@testing-library/react';
import SearchInput from './SearchInput';

const context = describe;

describe('SearchInput', () => {
  const label = '검색';
  const query = 'test';

  const setQuery = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderSearchInput = () => {
    render(<SearchInput
      label={label}
      placeholder="식당을 검색해주세요"
      query={query}
      setQuery={setQuery}
    />);
  };

  it('renders elements', () => {
    renderSearchInput();

    screen.getByLabelText(label);
    screen.getByPlaceholderText(/식당/);
    screen.getAllByDisplayValue(query);
  });

  context('when user enters name', () => {
    it('calls setQuery handler', () => {
      renderSearchInput();
      fireEvent.change(screen.getByLabelText(label), {
        target: { value: 'new' },
      });
      expect(setQuery).toBeCalledWith('new');
    });
  });
});
