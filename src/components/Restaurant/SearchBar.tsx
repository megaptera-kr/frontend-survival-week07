import TextField from './TextField';
import Categories from './Categoires';

type SearchBarProps = {
    categories: string[];
    setFilterText: (value: string) => void;
    setFilterCategory: (value: string) => void;
}

export default function SearchBar({
  categories, setFilterText, setFilterCategory,
}: SearchBarProps) {
  return (
    <div>
      <TextField setFilterText={setFilterText} />
      <Categories categories={categories} setFilterCategory={setFilterCategory} />
    </div>
  );
}
