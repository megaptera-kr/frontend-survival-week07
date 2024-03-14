import { container } from 'tsyringe';

import CartStore from './CartStore';

import CartItemType from '../types/CartItemType';
import NotFoundError from '../exceptions/NotFoundError';

const context = describe;

describe('CartStore', () => {
  let store: CartStore;
  let obj: CartItemType;

  beforeEach(() => {
    store = container.resolve(CartStore);
    container.clearInstances();
    obj = {
      menuId: 1,
      menuName: '김밥',
      menuPrice: 3000,
      restaurantId: 1,
      restaurantName: '레스토랑',
      categoryName: '분식',
      quantity: 1,
    };
  });

  context('When CartStore instance created', () => {
    it('store instance is not null and cartItem has length 0', () => {
      expect(store).not.toBeNull();
      expect(store.cart.cartItems).toHaveLength(0);
    });
  });

  context('When CartStore Action addItem excuted', () => {
    it('cartItem length 1', () => {
      store.addItem(obj);
      const { cartItems } = store.cart;

      expect(cartItems).toHaveLength(1);
    });
  });

  context(
    'When CartStore Action addItem excuted twice with differetn menuId',
    () => {
      it('cartItem length 2', () => {
        store.addItem(obj);
        obj.menuId = 2;
        store.addItem(obj);

        const { cartItems } = store.cart;

        expect(cartItems).toHaveLength(2);
      });
    },
  );

  context(
    'When CartStore Action addItem excuted twice with same menuId',
    () => {
      it('cartItem length 1 and quantity 2', () => {
        store.addItem(obj);
        store.addItem(obj);

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
        store.addItem(obj);

        obj.quantity = 9;
        store.addItem(obj);

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
      store.addItem(obj);
      store.deleteItem(obj.menuId);
      const { cartItems } = store.cart;

      expect(cartItems).toHaveLength(0);
      expect(() => store.deleteItem(obj.menuId)).toThrow(NotFoundError);
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
        store.addItem(obj);
        store.clearItems();
        const { cartItems } = store.cart;

        expect(cartItems).toHaveLength(0);
      });
    },
  );
});
