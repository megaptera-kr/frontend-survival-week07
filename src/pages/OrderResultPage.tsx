import { useSearchParams } from 'react-router-dom';

import ReceiptPrint from '../components/ReceiptPrinter';

import useFetchReceipt from '../hooks/useFetchReceipt';

export default function OrderResultPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const order = useFetchReceipt(searchParams.get('orderId'));
  return (
    <div>
      <ReceiptPrint order={order} />
    </div>
  );
}
