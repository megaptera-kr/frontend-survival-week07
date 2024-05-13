import { fireEvent, render, screen } from '@testing-library/react';
import TextField from '.';

const context = describe;
describe('TextField 컴포넌트', () => {
  const label = 'test';
  const placeholder = 'placeholder test';
  const filterText = '';
  const setFilterText = jest.fn();

  beforeEach(() => {
    render(<TextField
      label={label}
      placeholder={placeholder}
      filterText={filterText}
      setFilterText={setFilterText}
    />);
  });

  it('올바르게 렌더링 된다.', () => {
    screen.getByLabelText(label);
    screen.getByPlaceholderText(placeholder);
  });

  context('사용자가 입력하면', () => {
    it('setText 함수가 호출된다.', () => {
      fireEvent.change(screen.getByLabelText(label), {
        target: { value: '333' },
      });
      expect(setFilterText).toHaveBeenCalledWith('333');
    });
  });
});
