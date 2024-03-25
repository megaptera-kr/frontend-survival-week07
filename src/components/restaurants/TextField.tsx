import { useRef } from 'react';

type TextFieldProps = {
  label: string;
  placeholder: string;
  filterText: string;
  setFilterText: (text: string) => void;
}

function TextField({
  label, placeholder, filterText, setFilterText,
} : TextFieldProps) {
  const id = useRef(`input-${Math.random()}`);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setFilterText(value);
  };

  return (
    <div>
      <label htmlFor={id.current}>{label}</label>
      <input
        id={id.current}
        type="text"
        placeholder={placeholder}
        value={filterText}
        onChange={handleChange}
      />
    </div>
  );
}

export default TextField;
