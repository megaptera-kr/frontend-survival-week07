import Categories from './Categories';
import FilterTextField from './FilterTextField';

type SearchBarProps = {
  categories: string[];
  filterText: string;
  setFilterText: (text: string) => void;
  setFilterCategory: (text: string) => void;
}

function SearchBar({
  categories, filterText, setFilterText, setFilterCategory,
}: SearchBarProps) {
  return (
    <div>
      <FilterTextField
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <Categories
        categories={categories}
        setFilterCategory={setFilterCategory}
      />
    </div>
  );
}

export default SearchBar;
