type CategoryBtnProps = {
  setCategory: (category: string) => void;
  category: string;
};
export default function CategoryBtn({
  setCategory,
  category,
}: CategoryBtnProps) {
  const handleChangeCategory = () => {
    setCategory(category);
  };
  return (
    <button type="button" onClick={handleChangeCategory}>
      {category}
    </button>
  );
}
