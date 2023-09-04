interface SearchBarProps{
  filterText: string;
  setFilterText: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({
  filterText, setFilterText,
}: SearchBarProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterText(value);
  };
  return (
    <label>
      <span>검색</span>
      <input
        type="text"
        placeholder="식당 이름을 입력해주세요"
        value={filterText}
        onChange={handleChange}
      />
    </label>
  );
}
