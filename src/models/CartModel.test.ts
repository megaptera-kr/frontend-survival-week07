import CartModel, { MIN_QUANTITY, MAX_QUANTITY } from './CartModel';

import CartItemType from '../types/CartItemType';
import BadParamError from '../exceptions/BadParamError';
import NotFoundError from '../exceptions/NotFoundError';

const context = describe;

describe('CartModel', () => {
  let model: CartModel;
  let obj: CartItemType;

  beforeEach(() => {
    model = new CartModel();
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

  context('When CartModel is created', () => {
    it('cartItems is [] and length 0', () => {
      expect(model.cartItems).toHaveLength(0);
      expect(model.cartItems).toEqual([]);
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
      obj.quantity = -1;
      expect(() => model.upsertItem({ ...obj })).toThrow(BadParamError);
    });
  });

  context('When upsertItem function excuted with quantity 0', () => {
    it('throw BadParamError', () => {
      obj.quantity = 0;
      expect(() => model.upsertItem({ ...obj })).toThrow(BadParamError);
    });
  });

  context('When upsertItem function excuted with quantity 21', () => {
    it('throw BadParamError', () => {
      obj.quantity = 21;
      expect(() => model.upsertItem({ ...obj })).toThrow(BadParamError);
    });
  });

  context('When upsertItem function excuted with quantity 1', () => {
    it('not throw BadParamError', () => {
      obj.quantity = 1;
      expect(() => model.upsertItem({ ...obj })).not.toThrow(BadParamError);
    });
  });

  context('When upsertItem function excuted with quantity 20', () => {
    it('not throw BadParamError', () => {
      obj.quantity = 20;
      expect(() => model.upsertItem({ ...obj })).not.toThrow(BadParamError);
    });
  });

  // insertItem
  context('When upsertItem func excuted once normally', () => {
    it('menuItem length toHaveLength is 1', () => {
      obj.quantity = 1;
      model = model.upsertItem({ ...obj });
      expect(model.cartItems).toHaveLength(1);
    });
  });

  // insertItem
  context('When upsertItem func excuted once normally with quantity 2', () => {
    it('menuItem length toHaveLength 1 and the quantity is 2', () => {
      obj.quantity = 2;
      model = model.upsertItem({ ...obj });
      expect(model.cartItems).toHaveLength(1);
      expect(model.cartItems[0].quantity).toBe(2);
    });
  });

  // insertItem
  context('When upsertItem func excuted twice with different menuId', () => {
    it('menuItem length toHaveLength 2', () => {
      obj.quantity = 1;
      model = model.upsertItem({ ...obj });

      obj.menuId = 2;
      obj.quantity = 1;
      model = model.upsertItem({ ...obj });

      expect(model.cartItems).toHaveLength(2);
    });
  });

  // updateItem
  context('When upsertItem func excuted twice with same menuId', () => {
    it('menuItem length toHaveLength 2', () => {
      obj.quantity = 1;
      model = model.upsertItem({ ...obj });
      obj.quantity = 2;
      model = model.upsertItem({ ...obj });

      expect(model.cartItems).toHaveLength(1);
      expect(model.cartItems[0].quantity).toBe(3);
    });
  });

  // deleteItem
  context('When deleteItem func excuted but cartItem not exists', () => {
    it('throw NotFoundError', () => {
      expect(() => model.deleteItem(9999)).toThrow(NotFoundError);
    });
  });

  context('When deleteItem func excuted cartItem exists', () => {
    it('the target cartItem removed', () => {
      model = model.upsertItem({ ...obj });
      model = model.deleteItem(obj.menuId);

      expect(model.cartItems.length).toBe(0);
      expect(() => model.deleteItem(obj.menuId)).toThrow(NotFoundError);
    });
  });

  context('When clearItems func excuted when cartItem not exists', () => {
    it('cartItem length is 0', () => {
      model = model.clearItems();
      expect(model.cartItems.length).toBe(0);
    });
  });

  context('When clearItems func excuted when cartItem exists', () => {
    it('cartItem length is 0', () => {
      model = model.upsertItem({ ...obj });
      model = model.clearItems();
      expect(model.cartItems.length).toBe(0);
    });
  });
});
