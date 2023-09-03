import { render } from '@testing-library/react';

import OrderPage from './OrderPage';

describe('OrderPage', () => {
  it('OrderPage를 렌더링 한다.', () => {
    render(<OrderPage />);
  });
});
