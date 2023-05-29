import { useState } from 'react';

const BASE_URL = 'http://localhost:3000';

export default function useFetchReataurants() {
  const [data, setData] = useState([]);

  async function useFetch() {
    const res = await fetch(`${BASE_URL}/restaurants`);
    const { restaurants } = await res.json();
    setData(restaurants);
  }

  useFetch();

  return data;
}
