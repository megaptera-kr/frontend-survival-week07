import getUniqueCategory from '.';

describe('getUniqueCategory 함수', () => {
  it('빈 배열을 전달하면 전체만 담긴 배열을 반환한다.', () => {
    expect(getUniqueCategory([])).toEqual(['전체']);
  });

  it('중복된 카테고리가 포함된 배열을 전달하면 중복을 제거한 배열을 반환한다.', () => {
    const restaurants = [{
      id: '1', category: '중식', menu: [], name: '메가반점',
    }, {
      id: '2', category: '중식', menu: [], name: '메추반점',
    }, {
      id: '3', category: '한식', menu: [], name: '메가반점',
    }];
    expect(getUniqueCategory(restaurants)).toEqual(['전체', '중식', '한식']);
  });
});
