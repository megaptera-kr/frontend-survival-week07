interface CategoryButtonProps {
    category: string;
    setFilterCategory: React.Dispatch<React.SetStateAction<string>>;
}

function CategoryButton({
  category,
  setFilterCategory,
}: CategoryButtonProps) {
  return (
    <button
      type="button"
      onClick={() => setFilterCategory(category)}
    >
      {category}
    </button>
  );
}

export default CategoryButton;
