import { getRestaurants } from '../../services/getRestaurants';

const context = describe;

describe('레스토랑 리스트를 가져올 API가 필요하다.', () => {
  context('레스토랑 리스트를 가져온다.', () => {
    it('레스토랑 리스트가 조회된다.', async () => {
      const { restaurants } = await getRestaurants();
      expect(restaurants.length > 0).toBeTruthy();
    });
  });
});
