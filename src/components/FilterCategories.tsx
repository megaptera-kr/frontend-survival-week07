import Button from './common/button/Button';

type FilterCategoriesProps = {
  categories: string[];
  setFilterCategory: (value: string) => void;
}

export default function FilterCategories({
  categories, setFilterCategory,
}: FilterCategoriesProps) {
  function handleClick(category: string) {
    setFilterCategory(category);
  }
  return (
    <ul style={{ display: 'flex', listStyle: 'none', padding: '0' }}>
      {categories.map((category: string) => (
        <li
          key={category}
          style={{ marginRight: '3rem' }}
        >
          <Button
            name={`${category}`}
            onClick={() => handleClick(category)}
          >
            {category}
          </Button>
        </li>
      ))}
    </ul>
  );
}
