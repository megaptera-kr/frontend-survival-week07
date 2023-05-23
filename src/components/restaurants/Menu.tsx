import { Menu } from '../../types/restaurant';
import FoodButton from './FoodButton';

type Props = {
  name: string;
  menu: Menu[];
}

export default function Menu({ name, menu }:Props) {
  return (
    <li className="w-full flex justify-evenly items-center p-4 border-2 border-purple-300">
      <div className="font-bold text-xl w-1/2">{name}</div>
      <ul className="grid grid-rows-3 gap-2 w-1/2">
        {menu.map((food) => (
          <li key={food.id}>
            <FoodButton food={food} />
          </li>
        ))}
      </ul>
    </li>
  );
}
