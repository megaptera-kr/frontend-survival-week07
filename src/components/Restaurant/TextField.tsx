type TextFieldProps = {
  setFilterText: (value: string) => void;
}

export default function TextField({ setFilterText }: TextFieldProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterText(value);
  };

  return (
    <div>
      <label htmlFor="label">검색</label>
      <input placeholder="식당 이름" id="label" onChange={handleChange} />
    </div>
  );
}
