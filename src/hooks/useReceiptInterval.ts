import { useInterval } from 'usehooks-ts';
import useStore from './useStore';
import { clearReceipt } from '../reducers/uiReducer';
import { Receipt } from '../../types';

const useReceiptInterval = (receipt: Receipt | null, timer = 5000) => {
  const { dispatch } = useStore();

  useInterval(
    () => {
      dispatch(clearReceipt());
    },
    receipt ? timer : null,
  );
};

export default useReceiptInterval;
