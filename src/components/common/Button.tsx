type ButtonProps = {
  text: string;
  onClick: () => void;
};

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button type="button" onClick={onClick}>
      {text}
    </button>
  );
}
