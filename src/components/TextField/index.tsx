/* eslint-disable react/require-default-props */
import { ChangeEvent, useRef } from 'react';

type TextFieldProps = {
  label:string;
  placeholder?:string
  filterText?:string;
  setFilterText?:(text:string) => void
}

function TextField({
  label, placeholder, filterText, setFilterText,
}:TextFieldProps) {
  const id = useRef(`input-${label}`);
  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (setFilterText) {
      setFilterText(value);
    }
  };
  return (
    <div>
      <label htmlFor={id.current}>{label}</label>
      <input
        type="text"
        id={id.current}
        placeholder={placeholder}
        value={filterText}
        onChange={handleChange}
      />
    </div>
  );
}

export default TextField;
