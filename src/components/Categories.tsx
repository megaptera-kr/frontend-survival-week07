type CategoriesProps = {
  categories: string[];
  onClick: (category: string) => void;
}

export default function Categories({ categories, onClick }: CategoriesProps) {
  return (
    <div>
      {['전체', ...categories].map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
