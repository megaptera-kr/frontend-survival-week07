import { Menu } from '../../types/restaurant';

type Props = {
  food: Menu;
}

export default function MenuButton({ food }:Props) {
  return (
    <button
      className="w-full bg-purple-300 py-2 px-4 rounded-md"
      name={food.name}
      type="button"
    >
      {`${food.name} ${food.price.toLocaleString()}원`}
    </button>
  );
}
