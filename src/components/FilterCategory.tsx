type FilterCategoryProps = {
    categories: string[],
    setFilterCategory: (text: string) => void
}

export default function FilterCategory({
  categories, setFilterCategory,
}: FilterCategoryProps) {
  const handleClick = (category: string) => {
    setFilterCategory(category);
  };

  return (
    <div>
      {
        ['전체', ...categories].map((category: string) => (
          <button
            key={category}
            type="button"
            onClick={() => handleClick(category)}
          >
            {category}
          </button>
        ))
      }
    </div>
  );
}
