import { render } from '@testing-library/react';

import OrderCompletePage from './OrderCompletePage';

describe('OrderCompletePage', () => {
  it('OrderCompletePage를 렌더링 한다.', () => {
    render(<OrderCompletePage />);
  });
});
