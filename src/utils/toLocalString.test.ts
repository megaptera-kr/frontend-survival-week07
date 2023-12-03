import toLocaleString from './toLocaleString';

const context = describe;

describe('toLocalString', () => {
  context('"6000" 을 파라미터로 전달 시', () => {
    it('"6,000" 와 기본 유닛인 "원"을 합쳐 변환 합니다.', () => {
      expect(toLocaleString(6000)).toBe('6,000원');
    });

    it('기본 유닛은 변경할 수 있습니다.', () => {
      expect(toLocaleString(6000, '바보')).toBe('6,000바보');
    });
  });
});
