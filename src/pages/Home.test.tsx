import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

describe('Home', () => {
  function renderHome() {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
  }

  it('renders Home', () => {
    renderHome();

    screen.getByText('원하시는 주문을 터치해주세요');
  });
});
