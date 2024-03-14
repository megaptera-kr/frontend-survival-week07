import CartModel, { MIN_QUANTITY, MAX_QUANTITY } from './CartModel';
import CartItemModel from './CartItemModel';

import BadParamError from '../exceptions/BadParamError';
import NotFoundError from '../exceptions/NotFoundError';

const context = describe;

describe('CartModel', () => {
  let cart: CartModel;
  let cartItem: CartItemModel;

  beforeEach(() => {
    cart = new CartModel();
    cartItem = new CartItemModel({
      menuId: 1,
      menuName: '김밥',
      menuPrice: 3000,
      restaurantId: 1,
      restaurantName: '레스토랑',
      categoryName: '분식',
      quantity: 1,
    });
  });

  context('When CartModel is created', () => {
    it('cartItems is [] and length 0', () => {
      expect(cart.cartItems).toHaveLength(0);
      expect(cart.cartItems).toEqual([]);
    });
  });

  context("When CartModel's member variable", () => {
    it('MIN_QUANTITY is 1', () => {
      expect(MIN_QUANTITY).toBe(1);
    });

    it('MAX_QUANTITY is 20', () => {
      expect(MAX_QUANTITY).toBe(20);
    });
  });

  // upsertItem method
  // NOTE: Avoid try catch when assert throw error
  context('When upsertItem function excuted with quantity -1', () => {
    it('throw BadParamError', () => {
      const obj = { ...cartItem, quantity: -1 };
      expect(() => cart.upsertItem(new CartItemModel(obj))).toThrow(
        BadParamError,
      );
    });
  });

  context('When upsertItem function excuted with quantity 0', () => {
    it('throw BadParamError', () => {
      const obj = { ...cartItem, quantity: 0 };
      expect(() => cart.upsertItem(new CartItemModel(obj))).toThrow(
        BadParamError,
      );
    });
  });

  context('When upsertItem function excuted with quantity 21', () => {
    it('throw BadParamError', () => {
      const obj = { ...cartItem, quantity: 21 };
      expect(() => cart.upsertItem(new CartItemModel(obj))).toThrow(
        BadParamError,
      );
    });
  });

  context('When upsertItem function excuted with quantity 1', () => {
    it('not throw BadParamError', () => {
      expect(() => cart.upsertItem(new CartItemModel(cartItem))).not.toThrow(
        BadParamError,
      );
    });
  });

  context('When upsertItem function excuted with quantity 20', () => {
    it('not throw BadParamError', () => {
      const obj = { ...cartItem, quantity: 20 };

      expect(() => cart.upsertItem(new CartItemModel(obj))).not.toThrow(
        BadParamError,
      );
    });
  });

  // insertItem
  context('When upsertItem func excuted once normally', () => {
    it('menuItem length toHaveLength is 1', () => {
      cart = cart.upsertItem(new CartItemModel(cartItem));

      expect(cart.cartItems).toHaveLength(1);
    });
  });

  // insertItem
  context('When upsertItem func excuted once normally with quantity 2', () => {
    it('menuItem length toHaveLength 1 and the quantity is 2', () => {
      const obj = { ...cartItem, quantity: 2 };
      cart = cart.upsertItem(new CartItemModel(obj));

      expect(cart.cartItems).toHaveLength(1);
      expect(cart.cartItems[0].quantity).toBe(2);
    });
  });

  // insertItem
  context('When upsertItem func excuted twice with different menuId', () => {
    it('menuItem length toHaveLength 2', () => {
      cart = cart.upsertItem(new CartItemModel(cartItem));

      const obj = { ...cartItem, menuId: 2, quantity: 1 };
      cart = cart.upsertItem(new CartItemModel(obj));

      expect(cart.cartItems).toHaveLength(2);
    });
  });

  // updateItem
  context('When upsertItem func excuted twice with same menuId', () => {
    it('menuItem length toHaveLength 2', () => {
      cart = cart.upsertItem(new CartItemModel(cartItem));

      const obj = { ...cartItem, quantity: 2 };
      cart = cart.upsertItem(new CartItemModel(obj));

      expect(cart.cartItems).toHaveLength(1);
      expect(cart.cartItems[0].quantity).toBe(3);
    });
  });

  // deleteItem
  context('When deleteItem func excuted but cartItem not exists', () => {
    it('throw NotFoundError', () => {
      expect(() => cart.deleteItem(9999)).toThrow(NotFoundError);
    });
  });

  context('When deleteItem func excuted cartItem exists', () => {
    it('the target cartItem removed', () => {
      cart = cart.upsertItem(new CartItemModel(cartItem));
      cart = cart.deleteItem(cartItem.menuId);

      expect(cart.cartItems.length).toBe(0);
      expect(() => cart.deleteItem(cartItem.menuId)).toThrow(NotFoundError);
    });
  });

  context('When clearItems func excuted when cartItem not exists', () => {
    it('cartItem length is 0', () => {
      cart = cart.clearItems();

      expect(cart.cartItems.length).toBe(0);
    });
  });

  context('When clearItems func excuted when cartItem exists', () => {
    it('cartItem length is 0', () => {
      cart = cart.upsertItem(new CartItemModel(cartItem));
      cart = cart.clearItems();

      expect(cart.cartItems.length).toBe(0);
    });
  });
});
