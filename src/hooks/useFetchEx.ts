import { useEffect, useReducer, useRef } from 'react';

// 데이터와 에러를 포함하는 제네릭 상태 인터페이스 정의
interface State<T> {
    data?: T;
    error?: Error;
}

// 제네릭 타입 T를 받아와서 상태를 반환하는 useFetch 함수 정의
function useFetch<T = unknown>(url?: string, options?: RequestInit): State<T> {
  const cache = useRef<{ [url: string]: T }>({});
  const cancelRequest = useRef(false);

  // 초기 상태 및 상태를 변경하는 리듀서 함수 정의
  const initialState: State<T> = {
    data: undefined,
    error: undefined,
  };
  const fetchReducer = (
    state: State<T>
    , action: { type: string, payload?: T | Error },
  ): State<T> => {
    switch (action.type) {
    case 'loading':
      return { ...initialState };
    case 'fetched':
      return { ...initialState, data: action.payload };
    case 'error':
      return { ...initialState, error: action.payload };
    default:
      return state;
    }
  };

  // useReducer 훅을 사용하여 상태와 상태를 변경하는 함수를 생성
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (!url) return;

    cancelRequest.current = false;

    // 비동기 데이터 가져오는 함수 정의
    const fetchData = async () => {
      dispatch({ type: 'loading' });

      if (cache.current[url]) {
        dispatch({ type: 'fetched', payload: cache.current[url] });
        return;
      }

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data: T = await response.json();
        cache.current[url] = data;

        if (cancelRequest.current) return;

        dispatch({ type: 'fetched', payload: data });
      } catch (error) {
        if (cancelRequest.current) return;

        dispatch({ type: 'error', payload: error });
      }
    };

    fetchData();

    // eslint-disable-next-line consistent-return
    return () => {
      cancelRequest.current = true;
    };
  }, [url, options]);

  return state;
}

export default useFetch;
