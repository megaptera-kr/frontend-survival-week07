import { render } from '@testing-library/react';
import { Route } from 'react-router-dom';

import OrderCompletePage from '../OrderCompletePage';
import { withRouter } from '../../tests/helper';

describe('Order Complete page', () => {
  it('render correctly', () => {
    const { asFragment } = render(withRouter(<Route path="/" element={<OrderCompletePage />} />));

    expect(asFragment()).toMatchSnapshot();
  });
});
