import { render, screen } from '@testing-library/react';
import TextField from './TextField';

describe('TextField', () => {
  const label = '검색';
  const placeholder = '식당 이름을 입력해주세요';
  const setValue = jest.fn();

  it('renders SearchBar', () => {
    render(<TextField label={label} placeholder={placeholder} value="" setValue={setValue} />);
    screen.getByText('검색');
    screen.getByPlaceholderText('식당 이름을 입력해주세요');
  });
});
