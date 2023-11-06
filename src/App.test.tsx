import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders with data', async () => {
    render((<App />));
  });
});
