import { render, screen } from '@testing-library/react';
import RestaurantRow from '.';
import fixture from '../../fixture';

const context = describe;
describe('RestaurantRow 컴포넌트', () => {
  context('restaurant props를 전달받으면', () => {
    beforeEach(() => {
      const restaurant = fixture.restaurants[0];
      render(
        <table>
          <tbody>
            <RestaurantRow restaurant={restaurant} />
          </tbody>
        </table>,
      );
    });

    it('restaurant의 name을 렌더링한다.', () => {
      screen.getByText(/메가반점/);
    });
    it('restaurant의 menu 리스트를 렌더링한다.', () => {
      const menuitems = screen.getAllByRole('listitem');
      expect(menuitems).toHaveLength(3);
    });
  });
});
