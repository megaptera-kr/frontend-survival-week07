import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders a page title', () => {
    render(<HomePage />);

    expect(screen.getByText(/메가의 민족/)).toBeInTheDocument();
  });
});
