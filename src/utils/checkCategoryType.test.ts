import checkCategoryType from './checkCategoryType';

const context = describe;

describe('카테고리 체크', () => {
  context('checkCategoryType()', () => {
    it.each([
      ['전체', true],
      ['중식', true],
      ['한식', true],
      ['일식', true],
      ['장식', false],
    ])('checkCategoryType(%s, %s) returns %s', (first, expected) => {
      expect(checkCategoryType(first)).toBe(expected);
    });
  });
});
