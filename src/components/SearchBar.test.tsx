import { render } from '@testing-library/react';
import SearchBar from './SearchBar';

test('SearchBar', () => {
  const setSearchText = jest.fn();
  const setButtonName = jest.fn();
  render(
    <SearchBar setSearchText={setSearchText} setButtonName={setButtonName} />,
  );
});
