import { useRef } from 'react';

type TextFieldProps = {
  label:string;
  // eslint-disable-next-line react/require-default-props
  placeholder?:string
}

function TextField({ label, placeholder }:TextFieldProps) {
  const id = useRef(`input-${label}`);
  return (
    <div>
      <label htmlFor={id.current}>{label}</label>
      <input type="text" id={id.current} placeholder={placeholder} />
    </div>
  );
}

export default TextField;
