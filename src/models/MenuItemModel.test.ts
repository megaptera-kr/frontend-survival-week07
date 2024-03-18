import MenuItemModel from './MenuItemModel';

test('MenuItemModel', () => {
  const obj = {
    id: 1,
    name: '김밥',
    price: 9999,
  };

  const model = new MenuItemModel(obj);

  expect(model).not.toBeNull();
  expect(model.getId()).toBe(obj.id);
  expect(model.getName()).toBe(obj.name);
  expect(model.getPrice()).toBe(obj.price);
});
