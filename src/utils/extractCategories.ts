import Restaurant from '../types/restaurant';

export default function extractCategories(restaurants: Restaurant[]):string[] {
  return restaurants.reduce((acc:string[], restaurant: Restaurant) => {
    const { category } = restaurant;

    return acc.includes(category) ? acc : [...acc, category];
  }, []);
}
