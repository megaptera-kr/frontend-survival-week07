import { MouseEvent } from 'react';
import { Category } from '../../types/category';

type CategoryFilterProps = {
  categories:Category[]
  selectedCategory:Category
  setSelectedCategory:(category:Category) => void
}

function CategoryFilter({
  categories,
  selectedCategory,
  setSelectedCategory,
}:CategoryFilterProps) {
  const handleClick = (event:MouseEvent<HTMLButtonElement>) => {
    const { name } = event.currentTarget;
    setSelectedCategory(name.slice(1));
  };
  return (
    <ul style={{ listStyle: 'none', display: 'flex', padding: 0 }}>
      {categories.map((category) => (
        <li key={category}>
          <button
            type="button"
            name={`#${category}`}
            style={{ color: selectedCategory === category ? 'red' : '' }}
            onClick={handleClick}
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default CategoryFilter;
