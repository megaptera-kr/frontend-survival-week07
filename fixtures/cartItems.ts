import CartItemType from '../src/types/CartItemType';

const cartItems: CartItemType[] = [
  {
    menuId: 1,
    menuName: '김밥',
    menuPrice: 3500,
    restaurantId: 1,
    restaurantName: '합정 김밥집',
    categoryName: '한식',
    quantity: 3,
  },
  {
    menuId: 2,
    menuName: '돈가스',
    menuPrice: 5000,
    restaurantId: 2,
    restaurantName: '홍대 김밥집',
    categoryName: '한식',
    quantity: 1,
  },
];

export default cartItems;
