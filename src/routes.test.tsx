import { render } from '@testing-library/react';

import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import routes from './routes';

describe('routes', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render(<RouterProvider router={router} />);
  }

  it('should render the HomePage without crash', () => {
    renderRouter('/');
  });

  it('should render the RestaurantListPage without crash', () => {
    renderRouter('/restaurants');
  });

  it('should render the RestaurantDetailPage without crash', () => {
    renderRouter('/restaurants/1');
  });

  it('should render the CartPage without crash', () => {
    renderRouter('/cart');
  });

  it('should render the OrderPage without crash', () => {
    renderRouter('/order');
  });
});
