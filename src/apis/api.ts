/* eslint-disable import/prefer-default-export */

export async function get<T>(host: string, path: string): Promise<T> {
  const url = `http://${host}/${path}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  const data = await response.json();

  return data;
}

export async function post<T, U>(host: string, path: string, body:T, options?: RequestInit)
  : Promise<U> {
  const url = `http://${host}/${path}`;

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  };

  const response = await fetch(url, requestOptions);

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  return response.json();
}
