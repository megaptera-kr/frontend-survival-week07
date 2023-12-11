type CategoryType = {
  categoryList: string[];
  setCategory: (category: string) => void;
}

export default function Category({ categoryList, setCategory }: CategoryType) {
  return (
    <div style={{ display: 'flex', gap: 15, marginTop: 10 }}>
      {categoryList.map((el) => (
        <button type="button" key={el} onClick={() => setCategory(el)}>
          {el}
        </button>
      ))}
    </div>
  );
}
