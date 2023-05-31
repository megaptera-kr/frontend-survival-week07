import { Action } from '../store/BaseStore';
import useStore from './useStore';

export default function useDispatch() {
  const store = useStore();

  return ((action:Action) => {
    store.dispatch(action);
  });
}
