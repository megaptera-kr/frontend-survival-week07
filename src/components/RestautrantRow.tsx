import Food from '../Types/Food';
import FoodItem from './FoodItem';

type RestautrantRowProps = {
    name: string,
    menu: Food[],
}

export default function RestautrantRow({
  name, menu,
}: RestautrantRowProps) {
  return (
    <tr>
      <td>{name}</td>
      <td>
        <ul>
          {
            menu.map((food) => (
              <FoodItem
                key={food.id}
                food={food}
              />
            ))
          }
        </ul>
      </td>
    </tr>
  );
}
