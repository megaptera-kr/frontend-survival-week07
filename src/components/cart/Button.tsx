type Props = {
  name: string;
  handleClick: () => void;
}

export default function Button({ name, handleClick }:Props) {
  return (
    <button
      className="font-bold text-xl bg-purple-300 rounded-md w-1/2 py-2 hover:bg-purple-500"
      onClick={handleClick}
      type="button"
    >
      {name}
    </button>
  );
}
