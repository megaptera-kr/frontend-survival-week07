import { render } from '@testing-library/react';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
  const setValue = jest.fn();
  it('SearchBar를 렌더링한다', () => {
    render((
      <SearchBar
        value=""
        setValue={setValue}
        categories={['한식', '중식', '일식']}
        setCategory={jest.fn()}
      />
    ));
  });
});
