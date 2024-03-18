import { fireEvent, render, screen } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  const text = '버튼 이름';
  const onClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('listens for click events', () => {
    render(<Button text={text} onClick={onClick} />);

    screen.getByText(text);
    fireEvent.click(screen.getByText(text));

    expect(onClick).toBeCalled();
  });
});
