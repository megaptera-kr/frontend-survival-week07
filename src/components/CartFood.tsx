import useDispatch from '../hooks/useDispatch';
import { deleteFood } from '../store/Stores';
import Food from '../types/Food';

type CartFoodProps = {
  food : Food
  index : number
}

export default function CartFood({ food, index }:CartFoodProps) {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(deleteFood(String(index)));
  }
  return (
    <div>
      {food.name}
      {food.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
      원
      <input type="button" value="X" onClick={handleClick} />
    </div>
  );
}
