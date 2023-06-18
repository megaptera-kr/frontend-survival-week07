import CategoryButton from './CategoryButton';

interface FilterButtonsProps {
  categories: string[];
  setFilterCategory: React.Dispatch<React.SetStateAction<string>>;
}

export default function FilterButtons({
  categories,
  setFilterCategory,
}: FilterButtonsProps) {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category}>
          <CategoryButton
            category={category}
            setFilterCategory={setFilterCategory}
          />
        </li>
      ))}
    </ul>
  );
}
