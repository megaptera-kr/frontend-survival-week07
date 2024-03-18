import RestaurantType from '../src/types/RestaurantType';

const restaurants: RestaurantType[] = [
  {
    id: 1,
    category: '중식',
    name: '메가반점',
    menu: [
      { id: 1, name: '짜장면', price: 8000 },
      { id: 2, name: '짬뽕', price: 8000 },
      { id: 3, name: '차돌짬뽕', price: 9000 },
      { id: 4, name: '탕수육', price: 14000 },
    ],
  },
  {
    id: 2,
    category: '한식',
    name: '메리김밥',
    menu: [
      { id: 5, name: '김밥', price: 3500 },
      { id: 6, name: '참치김밥', price: 4500 },
      { id: 7, name: '제육김밥', price: 5000 },
      { id: 8, name: '훈제오리김밥', price: 5500 },
      { id: 9, name: '컵라면', price: 2000 },
    ],
  },
];

export default restaurants;
