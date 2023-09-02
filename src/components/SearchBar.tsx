import FilterTextField from './FilterTextField';
import Categories from './Categories';

type SearcBarProps = {
  categories: string[];
  query: string;
  setQuery: (value: string) => void;
  setCategory: (value: string) => void;
}

export default function SearchBar({
  categories, query, setQuery, setCategory,
}: SearcBarProps) {
  return (
    <div>
      <FilterTextField query={query} setQuery={setQuery} />
      <Categories categories={categories} setCategory={setCategory} />
    </div>
  );
}
