import fixtures from '../../fixtures';

import selectCategories from './selectCategories';

describe('selectCategories', () => {
  it('restaurants를 받아서 categories를 중복없이 반환한다.', () => {
    const { restaurants } = fixtures;

    const categories = selectCategories({
      restaurants: [...restaurants, ...restaurants, ...restaurants],
    });

    expect(categories).toEqual(['중식', '한식']);
  });
});
