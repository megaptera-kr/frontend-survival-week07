import { render } from '@testing-library/react';

import App from './Layout';

describe('App', () => {
  it('renders without crash', () => {
    render(<App />);
  });
});
