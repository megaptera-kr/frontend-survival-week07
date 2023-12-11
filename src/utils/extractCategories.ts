import { Restaurant } from '../types';

const extractCategories = (restaurants : Restaurant[]) => restaurants
  .reduce((acc : string[], cur : Restaurant) => {
    const { category } = cur;
    return acc.includes(category) ? acc : [...acc, category];
  }, []);

export default extractCategories;
