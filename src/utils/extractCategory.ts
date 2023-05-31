import Restaurant from '../types/Restaurant';

type extractCategoryProps = {
  restaurants : Restaurant[]
}

export default function extractCategory({ restaurants }:extractCategoryProps) {
  return restaurants.reduce((acc:string[], cur:Restaurant) => (
    acc.includes(cur.category) ? acc : [...acc, cur.category]
  ), []);
}
