import { render, screen } from '@testing-library/react';

import Menu from './Menu';

import foods from '../../fixtures/foods';

describe('Menu', () => {
  it('render food information', () => {
    render(<Menu menus={foods} />);

    screen.getByText(/짜장면/);
    screen.getByText(/8,000원/);
    screen.getByText(/짬뽕/);
    screen.getByText(/5,000원/);
  });
});
