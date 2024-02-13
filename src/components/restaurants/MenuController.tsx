import Categories from './Categories';
import TextField from './TextField';

type MenuControllerProps = {
  setCategory: (category: string) => void;
  setQuery: (query: string) => void;
  categories: string[];
  query: string;
};
export default function MenuController({
  setCategory,
  setQuery,
  categories,
  query,
}: MenuControllerProps) {
  return (
    <div>
      <TextField
        setQuery={setQuery}
        query={query}
        placeholderText="식당 이름을 입력해주세요"
      />
      <Categories categories={categories} setCategory={setCategory} />
    </div>
  );
}
