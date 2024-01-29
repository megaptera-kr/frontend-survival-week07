import { fireEvent, render, screen } from '@testing-library/react';

import { useNavigate } from 'react-router';

import Order from './Order';

jest.mock('react-router', () => ({
  useNavigate: jest.fn(),
}));

describe('Order', () => {
  const mockNavigate = jest.fn();
  (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

  it('navigates to / when a button is clicked', () => {
    render(<Order />);

    const cancleBtn = screen.getByText(/취소/);
    fireEvent.click(cancleBtn);

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
