import SearchText from './SearchText';
import CategoryButtons from './CategoryButtons';

type SearchBarProp = {
  setSearchText: (v: string) => void;
  setButtonName: (v: string) => void;
};

function SearchBar({ setSearchText, setButtonName }: SearchBarProp) {
  return (
    <div>
      <SearchText
        placeholder='식당 이름을 입력해주세요'
        setSearchText={setSearchText}
      />
      <CategoryButtons setCategoryButtonName={setButtonName} />
    </div>
  );
}

export default SearchBar;
