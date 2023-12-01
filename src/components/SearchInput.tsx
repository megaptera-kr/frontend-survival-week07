type Props = {
  query : string,
  setQuery : React.Dispatch<React.SetStateAction<string>>;
}

function SearchInput({ query, setQuery } : Props) {
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);
  };

  return (
    <div>
      <label htmlFor="search">검색</label>
      <input
        id="search"
        value={query}
        placeholder="식당 이름을 검색해주세요"
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchInput;
