import { render, screen } from '@testing-library/react';
import {
  MemoryRouter,
} from 'react-router-dom';
import Home from '../pages/Home';

const context = describe;

describe('Layout', () => {
  context('when the current path is "/"', () => {
    it('renders the Home page', () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <Home />
        </MemoryRouter>,
      );
      expect(screen.getByText(/원하시는 주문/)).toBeInTheDocument();
    });
  });
});
