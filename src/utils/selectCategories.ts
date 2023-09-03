import { Restaurant } from '../types/restaurants';

type selectCategoriesProps = {
  restaurants: Restaurant[]
}

export default function selectCategories({ restaurants }: selectCategoriesProps): string[] {
  return restaurants.reduce<string[]>((categories, { category }) => {
    if (!categories.includes(category)) {
      return [...categories, category];
    }
    return categories;
  }, []);
}
