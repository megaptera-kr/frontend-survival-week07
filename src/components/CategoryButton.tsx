type CategoryButtonProps = {
  categoryName: string;
  setCategoryName: (v: string) => void;
};

function CategoryButton({
  categoryName,
  setCategoryName,
}: CategoryButtonProps) {
  return (
    <section>
      <button type='button' onClick={() => setCategoryName(categoryName)}>
        {categoryName}
      </button>
    </section>
  );
}

export default CategoryButton;
