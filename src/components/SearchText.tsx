import useFieldRef from '../hooks/useFieldRef';

type SearchTextProps = {
  label: string;
  placeholder: string;
  setSearchText: (v: string) => void;
};

function SearchText({ label, placeholder, setSearchText }: SearchTextProps) {
  const [, current] = useFieldRef('searchText');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <section>
        <label htmlFor={current}>{label}</label>
        <input id={current} placeholder={placeholder} onChange={handleChange} />
      </section>
    </div>
  );
}

export default SearchText;
