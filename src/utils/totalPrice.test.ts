import totalPrice from './totalPrice';

describe('totalPrice ', () => {
  it('has no item', () => {
    const price = totalPrice([]);

    expect(price).toBe(0);
  });

  it('has one item', () => {
    const price = totalPrice([{ id: '1', name: '짜장면', price: 8000 }]);

    expect(price).toBe(8000);
  });

  it('has two items', () => {
    const price = totalPrice([
      { id: '1', name: '짜장면', price: 8000 },
      { id: '2', name: '짬뽕', price: 16000 },
    ]);

    expect(price).toBe(24000);
  });
});
