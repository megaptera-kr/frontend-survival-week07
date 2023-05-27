import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('render show title', () => {
    render(<Header />);
    expect(screen.getByText(/메가테라 푸드코트/)).toBeInTheDocument();
  });
});
