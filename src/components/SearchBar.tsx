import Categories from './Categories';
import FilterTextField from './FilterTextField';

type SearchBarProps = {
    categories: string[];
    filterText: string;
    setFilterText: (value: string) => void;
    setFilterCategory: (value: string) => void;
}

export default function SearchBar({
  categories,
  filterText,
  setFilterText,
  setFilterCategory,
}:SearchBarProps) {
  return (
    <div>
      <FilterTextField text={filterText} setText={setFilterText} />
      <Categories categories={categories} setFilterCategory={setFilterCategory} />
    </div>
  );
}
