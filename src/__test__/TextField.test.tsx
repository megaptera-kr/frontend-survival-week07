import { fireEvent, render, screen } from '@testing-library/react';

import TextField from '../components/TextField';

const context = describe;

describe('<TextField />', () => {
  const label = '검색';
  const placeholder = '식당 이름';
  const query = 'test';
  const setQuery = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderTextField() {
    render(<TextField
      label={label}
      placeholder={placeholder}
      query={query}
      setQuery={setQuery}
    />);
  }

  it('render without crash', () => {
    renderTextField();
    screen.getByLabelText(label);
    screen.getByPlaceholderText(placeholder);
    screen.getByDisplayValue(query);
  });

  context('when user enters restaurant', () => {
    it('call "setQuery" handler', () => {
      renderTextField();

      fireEvent.change(screen.getByLabelText(label), { target: { value: 'test value' } });
      expect(setQuery).toBeCalledWith('test value');
    });
  });
});
