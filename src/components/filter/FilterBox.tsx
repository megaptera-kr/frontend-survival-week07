import FilterButtons from './FilterButtons';
import SearchBar from './SearchBar';

interface FilterBoxProps {
  categories: string[];
  filterText: string;
  setFilterText: React.Dispatch<React.SetStateAction<string>>;
  setFilterCategory: React.Dispatch<React.SetStateAction<string>>;
}

export default function FilterBox({
  categories,
  filterText, setFilterText,
  setFilterCategory,
} : FilterBoxProps) {
  return (
    <div>
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <FilterButtons
        categories={categories}
        setFilterCategory={setFilterCategory}
      />
    </div>
  );
}
