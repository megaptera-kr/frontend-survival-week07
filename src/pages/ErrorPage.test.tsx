import { render } from '@testing-library/react';

import ErrorPage from './ErrorPage';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useRouteError: jest.fn(),
}));

test('ErrorPage', () => {
  render(<ErrorPage />);
});
