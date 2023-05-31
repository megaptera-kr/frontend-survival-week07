import { useRef } from 'react';

type FilterTextFieldProps = {
    filterText: string,
    setFilterText: (text: string) => void
}

export default function FilterTextField({
  filterText, setFilterText,
}: FilterTextFieldProps) {
  const id = useRef(`input=${Math.random()}`);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilterText(value);
  };

  return (
    <div>
      <label htmlFor={id.current}>검색</label>
      <input
        type="text"
        id={id.current}
        placeholder="식당 이름을 입력해주세요"
        value={filterText}
        onChange={handleChange}
      />
    </div>
  );
}
