import { waitFor, screen } from '@testing-library/react';

import App from './App';

import { useRender } from './testHelper';

describe('App ', () => {
  it('renders restaurants', async () => {
    useRender(<App />);

    await waitFor(() => {
      screen.getByText(/원하시는 주문을 터치해주세요/);
      screen.getByText(/매장 주문/);
    });
  });
});
