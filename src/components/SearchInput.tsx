type Props = {
  query : string,
  setQuery : React.Dispatch<React.SetStateAction<string>>,
  label : string,
  placeholder: string
}

function SearchInput({
  query, setQuery, label, placeholder,
} : Props) {
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);
  };

  return (
    <div>
      <label htmlFor="search">{label}</label>
      <input
        id="search"
        value={query}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchInput;
