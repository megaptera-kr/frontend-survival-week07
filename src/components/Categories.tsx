type CategoriesProps = {
  catagories: string[];
  setFilterCategory: (text: string) => void;
};

export default function Categories({
  catagories,
  setFilterCategory,
}: CategoriesProps) {
  return (
    <ul>
      {['전체', ...catagories].map((category) => (
        <li key={category}>
          <button type="button" onClick={() => setFilterCategory(category)}>
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
}
