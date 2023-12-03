import 'whatwg-fetch';

const context = describe;

describe('페이지에 접속한다.', () => {
  async function getOrderDetail() {
    const response = await fetch('http://localhost:3000/orders');
    const data = await response.json();
    return data;
  }
  context('페이지에 접속하였을 때, query를 이용하여 주문내역을 조회한다.', () => {
    it('주문내역이 조회된다.', async () => {
      const response = await getOrderDetail();
      const { orders } = response;
      expect(orders.length > 0).toBeTruthy();
    });
  });
});
