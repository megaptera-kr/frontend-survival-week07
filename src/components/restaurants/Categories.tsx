type CategoriesProps = {
    categories: string[],
    setCategory: (category:string) => void;
}
export default function Categories({ categories, setCategory }:CategoriesProps) {
  const handleChangeCategory = (selectCategory: string) => {
    setCategory(selectCategory);
  };
  return (
    <div>
      {['전체', ...categories].map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => handleChangeCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
