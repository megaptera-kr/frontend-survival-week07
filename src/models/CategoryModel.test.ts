import CategoryModel from './CategoryModel';

test('CategoryModel', () => {
  const obj = {
    id: 1,
    name: '카테고리',
  };

  const model = new CategoryModel(obj);

  expect(model).not.toBeNull();
  expect(model.getId()).toBe(obj.id);
  expect(model.getName()).toBe(obj.name);
});
