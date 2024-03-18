import { container } from 'tsyringe';

import CartStore from './CartStore';

import CartItemModel from '../models/CartItemModel';

import NotFoundError from '../exceptions/NotFoundError';

const context = describe;

describe('CartStore', () => {
  let store: CartStore;
  let cartItem: CartItemModel;

  beforeEach(() => {
    store = container.resolve(CartStore);
    cartItem = new CartItemModel({
      menuId: 1,
      menuName: '김밥',
      menuPrice: 3000,
      restaurantId: 1,
      restaurantName: '레스토랑',
      categoryName: '분식',
      quantity: 1,
    });

    container.clearInstances();
  });

  context('When CartStore instance created', () => {
    it('store instance is not null and cartItem has length 0', () => {
      expect(store).not.toBeNull();
      expect(store.cart.cartItems).toHaveLength(0);
    });
  });

  context('When CartStore Action addItem excuted', () => {
    it('cartItem length 1', () => {
      store.addItem(cartItem);
      const { cartItems } = store.cart;

      expect(cartItems).toHaveLength(1);
    });
  });

  context(
    'When CartStore Action addItem excuted twice with differetn menuId',
    () => {
      it('cartItem length 2', () => {
        store.addItem(cartItem);

        const obj = { ...cartItem, menuId: 2 };
        store.addItem(new CartItemModel(obj));

        const { cartItems } = store.cart;

        expect(cartItems).toHaveLength(2);
      });
    },
  );

  context(
    'When CartStore Action addItem excuted twice with same menuId',
    () => {
      it('cartItem length 1 and quantity 2', () => {
        store.addItem(cartItem);
        store.addItem(cartItem);
        const { cartItems } = store.cart;

        expect(cartItems).toHaveLength(1);
        expect(cartItems[0].quantity).toBe(2);
      });
    },
  );

  context(
    'When CartStore Action addItem excuted twice with same menuId and quantity',
    () => {
      it('cartItem length 1 and quantity 10', () => {
        store.addItem(cartItem);

        const obj = { ...cartItem, quantity: 9 };
        store.addItem(new CartItemModel(obj));

        const { cartItems } = store.cart;

        expect(cartItems).toHaveLength(1);
        expect(cartItems[0].quantity).toBe(10);
      });
    },
  );

  context('When CartStore Action delete excuted the menuId not exists', () => {
    it('throw NotFoundError', () => {
      expect(() => store.deleteItem(9999)).toThrow(NotFoundError);
    });
  });

  context('When CartStore Action delete excuted the menuId exists', () => {
    it('cartItem length 0', () => {
      store.addItem(cartItem);
      store.deleteItem(cartItem.menuId);
      const { cartItems } = store.cart;

      expect(cartItems).toHaveLength(0);
      expect(() => store.deleteItem(cartItem.menuId)).toThrow(NotFoundError);
    });
  });

  context(
    'When CartStore Action clearItems excuted when cartItems not exists',
    () => {
      it('cartItem length 0', () => {
        store.clearItems();
        const { cartItems } = store.cart;

        expect(cartItems).toHaveLength(0);
      });
    },
  );

  context(
    'When CartStore Action clearItems excuted when cartItems exists',
    () => {
      it('cartItem length 0', () => {
        store.addItem(cartItem);
        store.clearItems();
        const { cartItems } = store.cart;

        expect(cartItems).toHaveLength(0);
      });
    },
  );
});
