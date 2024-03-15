import Order from '../types/OrderType';

const orders: Order[] = [
  {
    id: '1710470369910',
    orderKind: '매장 주문',
    totalPrice: 8000,
    status: '주문완료',
    menuItems: [
      {
        id: 'mock-menuItemId-123123',
        menuId: 5,
        menuName: '김밥',
        menuPrice: 3500,
        restaurantId: 2,
        restaurantName: '메리김밥',
        categoryName: '한식',
        quantity: 1,
      },
    ],
    createAt: new Date('2023-03-15T10:10:00'),
    updateAt: new Date('2023-03-15T10:10:00'),
  },
];

export default orders;
