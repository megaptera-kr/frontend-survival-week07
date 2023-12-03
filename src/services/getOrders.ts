// eslint-disable-next-line import/prefer-default-export, consistent-return
export const getOrders = async (id : string) => {
  try {
    const response = await fetch(`http://localhost:3000/orders/${id}`);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    throw Error('주문 조회에 실패했습니다.');
  }
};
