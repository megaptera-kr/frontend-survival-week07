/* eslint-disable comma-dangle */
import { fireEvent, render, screen } from '@testing-library/react';

import TextField from './TextField';

const context = describe;

describe('TextField', () => {
  const label = '검색';
  const text = '';
  const setText = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderTextField() {
    render(
      <TextField
        label={label}
        placeholder="식당이름을 입력해주세요"
        text={text}
        setText={setText}
      />
    );
  }

  it('renders elements', () => {
    renderTextField();

    screen.getByText(/검색/);
    screen.getByPlaceholderText(/식당이름/);
    screen.getByDisplayValue(text);
  });

  context('when user enters name', () => {
    it('calls “setText”  handle', () => {
      renderTextField();

      fireEvent.change(screen.getByLabelText(label), {
        target: { value: '메가반점' },
      });

      expect(setText).toBeCalledWith('메가반점');
    });
  });
});
