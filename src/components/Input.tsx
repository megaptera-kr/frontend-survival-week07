import { useCallback } from 'react';
import Typo from './Typo';
import Grid from './Grid';

interface Props {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
}

function Input({
  value, label, placeholder, onChange,
}: Props) {
  const handleChange = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      onChange(value);
    },
    [],
  );

  return (
    <Grid gridTemplateColumns="30px 1fr" alignItems="center">
      <label htmlFor="input-검색">
        <Typo>{label}</Typo>
      </label>
      <div className="input">
        <input
          data-testid="Input"
          type="text"
          id="input-검색"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </div>
    </Grid>
  );
}

export default Input;
