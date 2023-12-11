import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router';
import Order from './Order';

describe('Order', () => {
  it('renders Order', () => {
    render(
      <MemoryRouter>
        <Order />
      </MemoryRouter>,
    );
  });
});
