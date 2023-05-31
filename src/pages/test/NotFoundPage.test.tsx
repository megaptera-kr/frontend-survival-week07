import { render } from '@testing-library/react';
import { Route } from 'react-router-dom';

import { withRouter } from '../../tests/helper';
import NotFoundPage from '../NotFoundPage';

describe('Not Found Page', () => {
  it('render correctly', () => {
    const { asFragment } = render(withRouter(<Route path="/" element={<NotFoundPage />} />));

    expect(asFragment()).toMatchSnapshot();
  });
});
