import { render, screen } from '@testing-library/react';

import OrderMenu from './OrderMenu';
import fixtures from '../../fixtures';

describe('OrderMenu', () => {
  it('menu를 렌더링 한다.', () => {
    const { menu } = fixtures.restaurants[0];
    render((
      <OrderMenu menu={menu} />
    ));

    screen.getByText(/짜장면/);
    screen.getByText(/짬뽕/);
    screen.getByText(/탕수육/);
  });

  it('총 가격을 렌더링 한다.', () => {
    const { menu } = fixtures.restaurants[0];
    render((
      <OrderMenu menu={menu} />
    ));

    screen.getByText(/총가격/);
    screen.getByText(/30,000/);
  });
});
