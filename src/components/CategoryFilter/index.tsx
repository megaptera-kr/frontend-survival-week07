import { Category } from '../../types/category';

type CategoryFilterProps = {
  categories:Category[]
}

function CategoryFilter({ categories }:CategoryFilterProps) {
  return (
    <ul style={{ listStyle: 'none', display: 'flex', padding: 0 }}>
      {categories.map((category) => (
        <li key={category}>
          <button type="button" name={`#${category}`}>{category}</button>
        </li>
      ))}
    </ul>
  );
}

export default CategoryFilter;
