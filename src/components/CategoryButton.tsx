type CategoryButtonProps = {
  selectedCategoryName: string;
};

function CategoryButton({ selectedCategoryName }: CategoryButtonProps) {
  // TODO: connect onClick event

  return (
    <section>
      <button type='button'>{selectedCategoryName}</button>
    </section>
  );
}

export default CategoryButton;
