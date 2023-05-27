function add(...numbers:number[]):number {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}

const context = describe;

describe('계산 테스트', () => {
  context('when no argu', () => {
    it('return zero', () => {
      expect(add()).toBe(0);
    });
  });
  context('when one argu', () => {
    it('return same', () => {
      expect(add(1)).toBe(1);
    });
  });
  context('when two argu', () => {
    it('return sum of two', () => {
      expect(add(1, 2)).toBe(3);
    });
  });
});
