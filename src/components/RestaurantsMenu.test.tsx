import { screen, render } from '@testing-library/react';
import fixtures from '../../fixtures';
import RestaurantsMenu from './RestaurantsMenu';

describe('RestaurantsMenu', () => {
  it('메뉴를 렌더링 한다.', () => {
    const { menu } = fixtures.restaurants[0];

    render((
      <RestaurantsMenu menu={menu} />
    ));

    screen.getByText(/짜장면/);
    screen.getByText(/짬뽕/);
  });
});
