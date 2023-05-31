import Restaurant from '../Types/Restaurant';

export default function extractCategories(restaurants: Restaurant[]) {
  return restaurants.reduce((acc: string[], restaurant) => {
    const { category } = restaurant;

    return acc.includes(category) ? acc : [...acc, category];
  }, []);
}
