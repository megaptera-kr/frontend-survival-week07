import { useEffect, useState } from 'react';

export interface FetchReturn<T> {
  data: T;
  isError: boolean;
  reFetch: () => void;
}

function useFetch<T>(url: string, option?: RequestInit): FetchReturn<T> {
  // 빈 객체({})를 T 타입으로 강제 변환
  // as를 사용해도 되는걸까?
  const [data, setData] = useState<T>({} as T);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, option);
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error('Could not fetch data.');
        }

        setData(responseData);
      } catch (err) {
        setIsError(true);
      }
    };

    fetchData();
  }, [url, option]);

  const reFetch = async () => {
    try {
      const response = await fetch(url);
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error('Could not fetch data.');
      }

      setData(responseData);
    } catch (err) {
      setIsError(true);
    }
  };

  return {
    data,
    isError,
    reFetch,
  };
}

export default useFetch;
