import { useEffect, useRef } from 'react';
import { container } from 'tsyringe';
import Store, { State } from '../stores/Store';
import useForceUpdate from './useForceUpdate';

type Selector<T> = (state :State) => T;

export default function useSelector<T>(selector :Selector<T>) : T {
  const store = container.resolve(Store);
  const forceUpdate = useForceUpdate();
  // selector를 통해 얻은 특정 state값, 전체 store가 아니다.
  const state = useRef(selector(store.state));

  useEffect(() => {
    const update = () => {
      const newState = selector(store.state);

      // 특정 조건이 맞으면 forceUpdate
      // selector의 결과가 객체인 경우 처리 필요
      if (newState !== state) {
        forceUpdate();
        state.current = newState;
      }
    };

    store.addListener(update);
    return () => store.removeListener(update);
  }, [store, forceUpdate]);

  return selector(store.state);
}
