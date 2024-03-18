import Menu from '../types/Menu';

import PUBLIC_API_URL from '../utils/api';

async function apiPostCreateOrder(menu: Menu[]) {
  const url = `${PUBLIC_API_URL}/orders`;

  const totalPrice = menu.reduce((acc, cur) => acc + cur.price, 0);

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ menu, totalPrice }),
  });

  const result = await res.json();

  return result;
}

export default apiPostCreateOrder;
