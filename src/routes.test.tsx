import { render, screen } from '@testing-library/react';

import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import routes from './routes';

describe('routes', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render(<RouterProvider router={router} />);
  }

  it('should render the App', () => {
    renderRouter('/');
    screen.getByText(/메가의 민족/);
  });
});
