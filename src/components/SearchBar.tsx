import TextField from './TextField';
import Categories from './Categories';

type SearchBarProps = {
  filterText: string;
  setFilterText: (value: string) => void;
  catagories: string[];
  setFilterCategory: (text: string) => void;
};

export default function SearchBar({
  filterText,
  setFilterText,
  catagories,
  setFilterCategory,
}: SearchBarProps) {
  return (
    <div>
      <TextField
        label="검색"
        placeholder="식당이름을 검색해주세요"
        text={filterText}
        setText={setFilterText}
      />
      <Categories
        catagories={catagories}
        setFilterCategory={setFilterCategory}
      />
    </div>
  );
}
