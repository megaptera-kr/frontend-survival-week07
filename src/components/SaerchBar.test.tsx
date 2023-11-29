import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  const categoryList = ['중식', '한식', '일식'];
  const setValue = jest.fn();
  const setCategory = jest.fn();

  it('renders SearchBar', () => {
    render(<SearchBar value="" categoryList={categoryList} setValue={setValue} setCategory={setCategory} />);
    screen.getByText('검색');
    screen.getByPlaceholderText('식당 이름을 입력해주세요');
  });
});
