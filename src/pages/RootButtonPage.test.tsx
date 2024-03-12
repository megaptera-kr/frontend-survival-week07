import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter

import RootButtonPage from './RootButtonPage';

test('RootButtonPage', () => {
  render(
    <MemoryRouter>
      <RootButtonPage />
    </MemoryRouter>,
  );

  screen.getByText('원하시는 주문을 터치해주세요');
  screen.getByRole('button', { name: '매장 주문' });
  screen.getByRole('button', { name: '전체 포장' });
});
