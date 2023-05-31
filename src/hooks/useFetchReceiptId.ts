import Food from '../types/Food';

type fetchReceiptIDProps = {
  menu : Food[],
  totalPrice: number,
}

export default function useFetchReceiptId() {
  const url = 'http://localhost:3000/orders';
  const fetchReceiptID = async ({ menu, totalPrice }:fetchReceiptIDProps) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ menu, totalPrice }),
    });
    const data = await response.json();
    return data;
  };

  return {
    fetchReceiptID,
  };
}
