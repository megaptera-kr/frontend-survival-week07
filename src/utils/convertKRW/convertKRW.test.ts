import convertKRW from '.';

const context = describe;
describe('convertKRW 함수', () => {
  context('1 ~ 999 숫자를 받으면', () => {
    it('숫자는 그대로 반환하고 마지막에 원 단위만 붙여서 반환한다.', () => {
      expect(convertKRW(1)).toBe('1원');
      expect(convertKRW(999)).toBe('999원');
    });
  });

  context('1000 ~ 10000 숫자를 받으면', () => {
    it('숫자는 천단위에 ,로 구분하고 반환하고 마지막에 원 단위만 붙여서 반환한다.', () => {
      expect(convertKRW(1000)).toBe('1,000원');
      expect(convertKRW(10000)).toBe('10,000원');
    });
  });
});
