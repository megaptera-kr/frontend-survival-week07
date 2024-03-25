import { fireEvent, render, screen } from '@testing-library/react';

import TextField from '../TextField';

const context = describe;

describe('TextField', () => {
  const label = '검색';
  const filterText = 'Test Text';

  const setFilterText = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderFilterTextField() {
    render((
      <TextField
        label={label}
        placeholder="Input Text"
        filterText={filterText}
        setFilterText={setFilterText}
      />
    ));
  }

  it('render elements', () => {
    renderFilterTextField();

    screen.getByLabelText(label);
    screen.getByPlaceholderText(/Input/);
    screen.getByDisplayValue(filterText);
  });

  context('when enters text', () => {
    it('calls "setFilterText" handler', () => {
      renderFilterTextField();
      const inputText = 'Hello World';

      fireEvent.change(screen.getByLabelText(label), {
        target: { value: inputText },
      });

      expect(setFilterText).toBeCalledWith(inputText);
    });
  });
});
