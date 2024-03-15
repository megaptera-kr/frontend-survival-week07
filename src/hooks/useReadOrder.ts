import { useEffect, useState } from 'react';

import OrderAPI from '../apis/OrderAPI';

import ReceiptModel from '../models/ReceiptModel';
import ReceiptType from '../types/ReceiptType';

type useReadOrderProps = {
  orderId: string;
};

type useReadOrderReturn = {
  receipt: ReceiptModel | null;
};

const api = new OrderAPI();

function useReadOrder({ orderId }: useReadOrderProps): useReadOrderReturn {
  const [receipt, setReceipt] = useState<ReceiptModel | null>(null);

  useEffect(() => {
    const fetchOneOrder = async () => {
      const data: ReceiptType = await api.readOne({ orderId });
      setReceipt(new ReceiptModel({ ...data }));
    };

    fetchOneOrder();
  }, []);

  return { receipt };
}

export default useReadOrder;
