import { Menu } from '../../types/restaurant';

type Props = {
  index: number;
  food: Menu;
  handleClick: () => void;
}

export default function Food({ index, food, handleClick }:Props) {
  return (
    <li className="w-full flex justify-center max-h-[40px]">
      <p className="font-bold text-xl w-[85%]">{`${food.name} ${food.price.toLocaleString()}원`}</p>
      <button
        className="font-bold text-xl bg-purple-300 rounded-md w-[35px] h-[35px]"
        onClick={handleClick}
        data-testid={`${food.name}-${index}`}
        name={`${food.name}-${index}`}
        type="button"
      >
        X
      </button>
    </li>
  );
}
