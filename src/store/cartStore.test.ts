import CartStore from './cartStore';

const context = describe;

describe('cartStore ', () => {
  const cartStore = new CartStore();
  context('when add cart', () => {
    afterEach(() => {
      cartStore.reset();
    });

    it('add food item', () => {
      cartStore.addItem({ id: '1', name: 'cart', price: 1_000 });

      expect(cartStore.cart).toHaveLength(1);
    });

    it('add food two items', () => {
      cartStore.addItem({ id: '1', name: 'cart', price: 1_000 });
      cartStore.addItem({ id: '2', name: 'food', price: 2_000 });

      expect(cartStore.cart).toHaveLength(2);
    });
  });

  context('when reset cart', () => {
    it('reset all item', () => {
      cartStore.addItem({ id: '1', name: 'cart', price: 1_000 });

      expect(cartStore.cart).toHaveLength(1);

      cartStore.reset();

      expect(cartStore.cart).toHaveLength(0);
    });
  });

  context('when remove item', () => {
    it('remove index item', () => {
      cartStore.addItem({ id: '1', name: 'cart', price: 1_000 });

      expect(cartStore.cart).toHaveLength(1);

      cartStore.removeIndexItem(0);

      expect(cartStore.cart).toHaveLength(0);
    });
  });
});
