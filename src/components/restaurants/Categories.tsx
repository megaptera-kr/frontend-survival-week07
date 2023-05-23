import useRestaurantStore from '../../hooks/useRestaurantStore';
import CategoryButton from './CategoryButton';

export default function Categories() {
  const [{ categories }, store] = useRestaurantStore();

  return (
    <ul className="w-full grid grid-cols-4 gap-10 mt-4">
      {categories.map((category) => (
        <li key={category}>
          <CategoryButton
            name={category}
            handleClick={() => store.selectCategory(category)}
          />
        </li>
      ))}
    </ul>
  );
}
