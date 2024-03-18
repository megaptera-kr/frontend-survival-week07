import TextField from './TextField';

import { Category } from '../../../../types/Restaurant';

type SearchBarProps = {
    categories: Category[];
    filterText: string;
    setFilterText: (text: string) => void;
    setFilterCategory: (text: Category) => void;
}

export default function SearchBar({
  categories, filterText, setFilterText, setFilterCategory,
}: SearchBarProps) {
  const categoryList : Category[] = ['전체', ...categories];
  return (
    <div>
      <TextField
        label="검색"
        placeholder="식당 이름을 입력해주세요"
        filterText={filterText}
        setFilterText={setFilterText}
      />
      {categoryList.map((category: Category) => (
        <button
          key={category}
          style={{ margin: '10px' }}
          type="button"
          onClick={() => setFilterCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
