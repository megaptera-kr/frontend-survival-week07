import fixtures from '../../fixtures';

import filterRestaurants from './filterRestaurants';

const context = describe;

describe('filterRestaurants', () => {
  const { restaurants } = fixtures;
  context('searchKeyword와 category가 없으면 ', () => {
    it('restaurants를 반환한다.', () => {
      const filteredRestaurants = filterRestaurants({
        restaurants,
        searchKeyword: '',
        category: '전체',
      });

      expect(filteredRestaurants).toEqual(restaurants);
    });
  });

  context('searchKeyword가 있으면 ', () => {
    it('restaurants에서 name에 searchKeyword가 포함된 것만 반환한다.', () => {
      const filteredRestaurants = filterRestaurants({
        restaurants,
        searchKeyword: '메리김밥',
        category: '전체',
      });

      expect(filteredRestaurants).toEqual([restaurants[1]]);
    });
  });

  context('category가 있으면 ', () => {
    it('restaurants에서 category가 일치하는 것만 반환한다.', () => {
      const filteredRestaurants = filterRestaurants({
        restaurants,
        searchKeyword: '',
        category: '중식',
      });

      expect(filteredRestaurants).toEqual([restaurants[0]]);
    });
  });

  context('searchKeyword와 category가 있으면 ', () => {
    it('restaurants에서 name에 searchKeyword가 포함되고, category가 일치하는 것만 반환한다.', () => {
      const filteredRestaurants = filterRestaurants({
        restaurants,
        searchKeyword: '메리김밥',
        category: '한식',
      });

      expect(filteredRestaurants).toEqual([restaurants[1]]);
    });
  });
});
