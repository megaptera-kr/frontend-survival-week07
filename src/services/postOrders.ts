// eslint-disable-next-line import/prefer-default-export, consistent-return
export const postOrders = async (orderItems : any) => {
  try {
    const response = await fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderItems),
    });
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    throw Error('주문등록에 실패했습니다.');
  }
};
