import CartModel from '../../models/CartModel';

const mockCartStoreInstance = {
  cart: new CartModel(),
  addItem: jest.fn(),
  deleteItem: jest.fn(),
  clearItems: jest.fn(),
  setOrderKind: jest.fn(),
};

const useCartStore = jest.fn(() => [
  { cart: mockCartStoreInstance.cart },
  mockCartStoreInstance,
]);

export default useCartStore;
