import { container } from 'tsyringe';
import { useEffect, useRef } from 'react';
import Store, { State } from '../store/BaseStore';
import useForceUpdate from './useForceUpdate';

type Selector<T> = (state: State) => T;

export function useSelector<T>(selector: Selector<T>): T {
  const store = container.resolve(Store);

  const refState = useRef<T>(selector(store.state));

  const forceUpdate = useForceUpdate();

  useEffect(() => {
    const update = () => {
      const newState = selector(store.state);

      const isShouldUpdate = !Object.is(newState, refState.current);

      if (isShouldUpdate) {
        refState.current = newState;
        forceUpdate();
      }
    };

    store.addListener(update);
    return () => store.removeListener(update);
  }, [store, forceUpdate]);

  return selector(store.state);
}

const useStore = () => {
  const store = container.resolve(Store);

  const { state, dispatch, getState } = store;

  return {
    state,
    dispatch,
    getState,
  };
};

export default useStore;
