type CategoryProps = {
  category: string;
  setFilterCategory: (text: string) => void;
}

function Category({ category, setFilterCategory }: CategoryProps) {
  return (
    <button
      type="button"
      onClick={() => setFilterCategory(category)}
    >
      {category}
    </button>
  );
}

export default Category;
