import CategoryButton from './CategoryButton';

import useFetchCategories from '../hooks/useFetchCategories';

import CategoryModel from '../models/CategoryModel';

type CategoryButtonsProps = {
  setCategoryButtonName: (v: string) => void;
};

function CategoryButtons({ setCategoryButtonName }: CategoryButtonsProps) {
  const { categories } = useFetchCategories();

  return (
    <ul
      style={{
        display: 'flex',
        padding: 0,
        listStyle: 'none',
      }}
    >
      {[new CategoryModel({ id: 0, name: '전체' }), ...categories].map(
        (item: CategoryModel) => (
          <CategoryButton
            key={item.getId()}
            categoryName={item.getName()}
            setCategoryName={setCategoryButtonName}
          />
        ),
      )}
    </ul>
  );
}

export default CategoryButtons;
