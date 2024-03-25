/* eslint-disable import/prefer-default-export */
const BASE_URL = 'http://localhost/8080';

async function fetchApiData(url: string, option?: RequestInit) {
  const response = await fetch(url, option);
  if (!response.ok) throw new Error('Could not fetch events.');
  return response;
}

export const getRestaurants = async () => fetchApiData(`${BASE_URL}/restaurants`);
