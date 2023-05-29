import FilterCategory from './FilterCategory';
import FilterTextField from './FilterTextField';

type SearchBarProps = {
    filterText: string,
    setFilterText: (text: string) => void,
    setFilterCategory: (text: string) => void,
    categories: string[]
}

export default function SearchBar({
  filterText, setFilterText, setFilterCategory, categories,
}: SearchBarProps) {
  return (
    <div>
      <FilterTextField
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <FilterCategory
        categories={categories}
        setFilterCategory={setFilterCategory}
      />
    </div>
  );
}
