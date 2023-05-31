import { Menu } from '../../types/restaurant';

type Props = {
  food: Menu;
  handleClick: () => void;
}

export default function MenuButton({ food, handleClick }:Props) {
  return (
    <button
      className="w-full bg-purple-300 py-2 px-4 rounded-md hover:bg-purple-500"
      name={food.name}
      type="button"
      onClick={handleClick}
    >
      {`${food.name} ${food.price.toLocaleString()}원`}
    </button>
  );
}
