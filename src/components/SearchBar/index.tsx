import { Category } from '../../types/category';
import CategoryFilter from '../CategoryFilter';
import TextField from '../TextField';

type SearchBarProps = {
  categories:Category[]
  filterText:string;
  setFilterText:(text:string) => void
  selectedCategory:Category
  setSelectedCategory:(category:Category) => void
}

function SearchBar({
  categories,
  filterText,
  setFilterText,
  selectedCategory,
  setSelectedCategory,
}:SearchBarProps) {
  return (
    <div>
      <TextField
        label="검색"
        placeholder="식당 이름을 입력해주세요"
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </div>
  );
}

export default SearchBar;
