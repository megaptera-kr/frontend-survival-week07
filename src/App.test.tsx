import { render } from '@testing-library/react';

import { RouterProvider, createMemoryRouter } from 'react-router';
import routes from './routes';

const context = describe;

describe('App', () => {
  context('when the path is "/" ', () => {
    it('renders the homepage', () => {
      const router = createMemoryRouter(routes, { initialEntries: ['/'] });
      render(<RouterProvider router={router} />);
    });
  });
  // it('renders without crash', () => {
  //   render(<App />);
  // });
});
