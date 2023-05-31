import useCartStore from '../../hooks/useCartStore';
import Food from './Food';

export default function Cart() {
  const [{ menu }, store] = useCartStore();
  return (
    <ul className="w-full min-h-[200px] max-h-[200px] overflow-y-scroll border-2 border-purple-300 mt-4 flex flex-col gap-4 p-4">
      {menu.map((food, index) => {
        const key = `${food.id}-${index}`;

        return (
          <Food
            key={key}
            index={index}
            food={food}
            handleClick={() => store.removeOrderMenu(index)}
          />
        );
      })}
    </ul>
  );
}
