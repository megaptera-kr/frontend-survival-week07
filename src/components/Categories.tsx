import { MouseEvent } from 'react';
import Category from './Category';

type CategoriesProps ={
  categories:string[];
  setCategory: (value: string) => void;
}

export default function Categories({ categories, setCategory }: CategoriesProps) {
  const handleCategoryBtn = (category: string) => {
    setCategory(category);
  };

  return (
    <ul style={{ listStyle: 'none', padding: 0, display: 'flex' }}>
      {['전체', ...categories].map((category) => (
        <Category
          key={category}
          category={category}
          onClickCategoryBtn={handleCategoryBtn}
        />
      ))}
    </ul>
  );
}
