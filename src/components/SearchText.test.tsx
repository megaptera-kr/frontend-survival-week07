import { render, screen, fireEvent } from '@testing-library/react';
import SearchText from './SearchText';

const context = describe;

describe('SearchText', () => {
  const label = '검색';
  const placeholder = 'Enter text...';
  const setSearchTextMock = jest.fn();

  context('render', () => {
    it('label 과 placeholder 가 올바르게 보인다.', () => {
      render(
        <SearchText
          label={label}
          placeholder={placeholder}
          setSearchText={setSearchTextMock}
        />,
      );

      screen.getByText(label);
      screen.getByPlaceholderText(placeholder);
    });
  });

  context('calls setSearchText when input changes', () => {
    it('입력한 값으로 함수가 호출된다.', () => {
      render(
        <SearchText
          label={label}
          placeholder={placeholder}
          setSearchText={setSearchTextMock}
        />,
      );

      const input = screen.getByPlaceholderText(placeholder);
      const inputValue = 'Test input value';

      fireEvent.change(input, { target: { value: inputValue } });

      expect(setSearchTextMock).toHaveBeenCalledWith(inputValue);
    });
  });
});
