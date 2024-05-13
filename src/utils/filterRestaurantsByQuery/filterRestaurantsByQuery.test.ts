import filterRestaurantsByQuery from '.';
import fixture from '../../fixture';

const { restaurants } = fixture;

const context = describe;
describe('filterRestaurantsByQuery 함수', () => {
  context('query가 전달되지 않으면', () => {
    it('restaurants를 그대로 반환한다.', () => {
      expect(filterRestaurantsByQuery(restaurants)).toEqual(restaurants);
    });
  });

  context('text 쿼리만 전달되면', () => {
    it('restaurants 중 식당 이름에 text가 포함된 배열을 반환한다.', () => {
      expect(filterRestaurantsByQuery(restaurants, { text: '메' })).toEqual([{
        id: '1',
        category: '중식',
        name: '메가반점',
        menu: [
          {
            id: '1',
            name: '짜장면',
            price: 8000,
          },
          {
            id: '2',
            name: '짬뽕',
            price: 8000,
          },
          {
            id: '3',
            name: '탕수육',
            price: 14000,
          },
        ],
      },
      {
        id: '2',
        category: '한식',
        name: '메리김밥',
        menu: [
          {
            id: '4',
            name: '김밥',
            price: 3500,
          },
          {
            id: '5',
            name: '제육김밥',
            price: 5500,
          },
          {
            id: '6',
            name: '컵라면',
            price: 2000,
          },
        ],
      }]);
    });
  });

  context('category 쿼리만 전달되면', () => {
    it('restaurants 중 category가 해당하는 배열을 반환한다.', () => {
      expect(filterRestaurantsByQuery(restaurants, { category: '한식' })).toEqual([{
        id: '2',
        category: '한식',
        name: '메리김밥',
        menu: [
          {
            id: '4',
            name: '김밥',
            price: 3500,
          },
          {
            id: '5',
            name: '제육김밥',
            price: 5500,
          },
          {
            id: '6',
            name: '컵라면',
            price: 2000,
          },
        ],
      },
      {
        id: '3',
        category: '한식',
        name: '데브부엌',
        menu: [
          {
            id: '7',
            name: '제육덮밥',
            price: 10000,
          },
          {
            id: '8',
            name: '갈비탕',
            price: 11000,
          },
          {
            id: '9',
            name: '돈까스',
            price: 10000,
          },
        ],
      }]);
    });
  });

  context('text,category 쿼리가 전달되면', () => {
    it('restaurants 중 category가 해당하고 식당이름에 text를 포함하는 배열을 반환한다.', () => {
      expect(filterRestaurantsByQuery(restaurants, { text: '메', category: '한식' })).toEqual([{
        id: '2',
        category: '한식',
        name: '메리김밥',
        menu: [
          {
            id: '4',
            name: '김밥',
            price: 3500,
          },
          {
            id: '5',
            name: '제육김밥',
            price: 5500,
          },
          {
            id: '6',
            name: '컵라면',
            price: 2000,
          },
        ],
      },
      ]);
    });
  });
});
