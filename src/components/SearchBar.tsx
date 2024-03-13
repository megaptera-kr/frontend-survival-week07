import SearchText from './SearchText';
import CategoryButtons from './CategoryButtons';

type SearchBarProp = {
  setButtonName: (v: string) => void;
};

function SearchBar({ setButtonName }: SearchBarProp) {
  return (
    <div>
      <SearchText />
      <CategoryButtons setCategoryButtonName={setButtonName} />
    </div>
  );
}

export default SearchBar;
