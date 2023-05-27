import FilterCategories from './FilterCategories';
import InputText from './common/input/InputText';

type FilterRestaurantsProps = {
  setFilterText: (value: string) => void;
  setFilterCategory: (value: string) => void;
  categories: string[];
}

export default function FilterRestaurants({
  setFilterText, setFilterCategory, categories,
}: FilterRestaurantsProps) {
  const handleFilterText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setFilterText(value);
  };

  return (
    <div>
      <InputText
        label="검색"
        placeholder="식당 이름을 입력해주세요"
        onChange={handleFilterText}
      />
      <FilterCategories
        categories={categories}
        setFilterCategory={setFilterCategory}
      />
    </div>
  );
}
