import Category from './Category';
import TextField from './TextField';

type SearchBarType = {
  value: string;
  categoryList: string[]
  setValue: (text: string) => void;
  setCategory: (category: string) => void;
}

export default function SearchBar({
  value, categoryList, setValue, setCategory,
}: SearchBarType) {
  return (
    <div style={{ marginBottom: 15 }}>
      <TextField label="검색" placeholder="식당 이름을 입력해주세요" value={value} setValue={setValue} />
      <Category categoryList={categoryList} setCategory={setCategory} />
    </div>
  );
}
