import foods from './foods';

const order = {
  id: 'ORDER_01',
  menu: [...foods],
  totalPrice: foods.reduce((acc, cur) => acc + cur.price, 0),
};

export default order;
