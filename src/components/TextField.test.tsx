import { fireEvent, render, screen } from '@testing-library/react';
import TextField from './TextField';

const context = describe;

describe('TextField', () => {
  const label = '검색';

  const placeholder = '식당 이름을 입력해주세요';

  const text = '메가';

  const setText = jest.fn();

  function renderTextField() {
    render((
      <TextField
        label={label}
        placeholder={placeholder}
        text={text}
        setText={setText}
      />
    ));
  }

  it('renders TextField', () => {
    renderTextField();

    screen.getByText(/검색/);
    screen.getByPlaceholderText('식당 이름을 입력해주세요');
    screen.getByDisplayValue('메가');
  });

  context('when user enters restaurant name', () => {
    it('callse "setText" handler', () => {
      renderTextField();

      fireEvent.change(screen.getByLabelText(label), {
        target: { value: '데브부엌' },
      });

      expect(setText).toBeCalledWith('데브부엌');
    });
  });
});
