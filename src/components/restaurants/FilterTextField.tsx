import TextField from './TextField';

type FilterTextField = {
  filterText: string;
  setFilterText: (text: string) => void;
}

function FilterTextField({ filterText, setFilterText }: FilterTextField) {
  return (
    <TextField
      label="검색"
      placeholder="식당 이름을 입력해주세요"
      filterText={filterText}
      setFilterText={setFilterText}
    />
  );
}

export default FilterTextField;
