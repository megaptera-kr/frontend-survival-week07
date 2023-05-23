type Props = {
  name: string;
  handleClick: () => void;
}

export default function CategoryButton({ name, handleClick }:Props) {
  return (
    <button
      className="w-full px-4 py-2 bg-purple-400 rounded-md text-lg font-bold"
      type="button"
      onClick={handleClick}
    >
      {name}
    </button>
  );
}
