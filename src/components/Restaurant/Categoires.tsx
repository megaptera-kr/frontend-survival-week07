import Category from './Category';

type CategoriesProps = {
  categories: string[];
  setFilterCategory: (value: string) => void;
}

export default function Categories({ categories, setFilterCategory }: CategoriesProps) {
  return (
    <ul>
      {categories.map((category) => (
        <Category
          key={category}
          category={category}
          setFilterCategory={setFilterCategory}
        />
      ))}
    </ul>
  );
}
