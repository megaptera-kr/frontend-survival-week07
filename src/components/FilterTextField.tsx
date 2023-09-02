import TextField from './TextField';

type FilterTextFieldProps = {
  query: string;
  setQuery: (value: string) => void;
}

export default function FilterTextField({ query, setQuery }: FilterTextFieldProps) {
  return (
    <TextField
      label="검색"
      placeholder="식당 이름"
      query={query}
      setQuery={setQuery}
    />
  );
}
