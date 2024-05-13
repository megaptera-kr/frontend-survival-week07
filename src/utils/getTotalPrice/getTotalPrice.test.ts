import getTotalPrice from '.';

describe('getTotalPrice 함수', () => {
  it('빈 배열이 주어지면 0을 반환한다.', () => {
    expect(getTotalPrice([])).toBe(0);
  });

  it('주어진 배열의 모든 price를 더한 값을 반환한다.', () => {
    expect(getTotalPrice([
      { id: '1', name: '짜장면', price: 8000 },
      { id: '2', name: '짬뽕', price: 9000 },
    ])).toBe(17000);
  });
});
