type Props = {
  name: string;
  handleClick: () => void;
}

export default function CategoryButton({ name, handleClick }:Props) {
  return (
    <button
      className="w-full px-4 py-2 bg-purple-300 rounded-md text-lg font-bold hover:bg-purple-500"
      type="button"
      onClick={handleClick}
    >
      {name}
    </button>
  );
}
