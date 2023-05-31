import useDispatch from '../hooks/useDispatch';
import { inputCategory } from '../store/Stores';

type ButtonFieldProps = {
  category : string
}

export default function ButtonField({ category }:ButtonFieldProps) {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(inputCategory(category));
  }
  return (
    <button type="button" onClick={handleClick}>
      {category}
    </button>
  );
}
