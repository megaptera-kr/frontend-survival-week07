import { render, screen, fireEvent } from '@testing-library/react';

import { useNavigate } from 'react-router';

import Home from './Home';

jest.mock('react-router', () => ({
  useNavigate: jest.fn(),
}));

describe('Home', () => {
  it('navigates to /order when a button is clicked', () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    render(<Home />);

    const orderButton = screen.getByText('매장 주문');
    fireEvent.click(orderButton);

    expect(mockNavigate).toHaveBeenCalledWith('/order');
  });
});
