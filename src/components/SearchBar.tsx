import useFetchRestaurants from '../hooks/useFetchRestaurants';
import extractCategory from '../utils/extractCategory';
import ButtonField from './ButtonField';

import TextField from './TextField';

export default function SearchBar() {
  const restaurants = useFetchRestaurants();
  const categories = extractCategory({ restaurants });

  return (
    <div>
      <TextField />
      <div>
        {
          ['전체', ...categories].map((category) => (
            <ButtonField key={category} category={category} />
          ))
        }
      </div>
    </div>
  );
}
