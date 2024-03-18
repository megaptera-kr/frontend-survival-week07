/* eslint-disable comma-dangle */
import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router';

import OrderButtons from './OrderButtons';

describe('OrderButtons', () => {
  it('renders Buttons related to orders', () => {
    render(
      <MemoryRouter>
        <OrderButtons />
      </MemoryRouter>
    );
    screen.getByText(/주문/);
    screen.getByText(/포장/);
  });
});
