import { ChangeEvent } from 'react';

type TextFieldProps = {
  label: string;
  placeholder: string;
  query: string;
  setQuery: (value: string) => void;
}

export default function TextField({
  label, placeholder, query, setQuery,
}: TextFieldProps) {
  const handleChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setQuery(value);
  };

  return (
    <div>
      <label htmlFor="text-filed">{label}</label>
      <input
        type="text"
        id="text-filed"
        placeholder={placeholder}
        value={query}
        onChange={handleChangeQuery}
      />
    </div>
  );
}
