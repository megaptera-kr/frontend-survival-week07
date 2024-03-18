import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import RootButtonPage from './RootButtonPage';

import { ORDER_TYPE_PACKAGE, ORDER_TYPE_STORE } from '../const/ConstOrder';

test('RootButtonPage', () => {
  render(
    <MemoryRouter>
      <RootButtonPage />
    </MemoryRouter>,
  );

  screen.getByText('원하시는 주문을 터치해주세요');
  screen.getByRole('button', { name: ORDER_TYPE_STORE });
  screen.getByRole('button', { name: ORDER_TYPE_PACKAGE });
});
