export default async function useFetchRestaurants() {
  const data = await fetch('http://localhost:3000/restaurants')
    .then((res: Response) => res.json());
  if (!data.restaurants) {
    return [];
  }
  return data.restaurants;
}
