type TextFieldType = {
  label: string;
  placeholder: string;
  value: string;
  setValue: (text: string) => void;
}

export default function TextField({
  label, placeholder, value, setValue,
}: TextFieldType) {
  return (
    <div>
      <label htmlFor="filterText" style={{ marginRight: 10 }}>{label}</label>
      <input type="text" id="filterText" value={value} placeholder={placeholder} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}
