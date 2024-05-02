import { render, screen } from '@testing-library/react';
import TextField from '.';

// const context =
describe('TextField 컴포넌트', () => {
  const label = 'test';
  const placeholder = 'placeholder test';

  beforeEach(() => {
    render(<TextField label={label} placeholder={placeholder} />);
  });

  it('올바르게 렌더링 된다.', () => {
    screen.getByLabelText(label);
    screen.getByPlaceholderText(placeholder);
  });

  // context('')
});
