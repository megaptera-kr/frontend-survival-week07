import useDispatch from '../hooks/useDispatch';
import { inputFood } from '../store/Stores';
import Food from '../types/Food';

type MenuProps = {
  menu : Food
}

export default function Menu({ menu }:MenuProps) {
  const dispatch = useDispatch();
  function handleClick() {
    const stringMenu = JSON.stringify(menu);
    dispatch(inputFood(stringMenu));
  }
  return (
    <div>
      <button type="button" onClick={handleClick}>
        {menu.name}
        {menu.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
        원
      </button>
    </div>
  );
}
