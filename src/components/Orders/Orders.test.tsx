import { render, screen } from '@testing-library/react';
import Orders from '.';
import fixture from '../../fixture';
import convertKRW from '../../utils/convertKRW';

const { order } = fixture;

const context = describe;
describe('Orders 컴포넌트', () => {
  beforeEach(() => {
    render(<Orders order={order} />);
  });

  it('올바르게 렌더링 된다.', () => {
    expect(screen.getByText('주문목록')).toBeInTheDocument();
  });

  context('order props를 전달받으면', () => {
    it('주문한 메뉴를 렌더링한다.', () => {
      const menuItems = screen.getAllByRole('listitem');
      expect(menuItems).toHaveLength(order.menu.length);
    });
    it('총가격을 계산하여 렌더링한다.', () => {
      const totalPriceElem = screen.getByText(
        new RegExp(`총가격 ${convertKRW(order.totalPrice)}`),
      );
      expect(totalPriceElem).toBeInTheDocument();
    });
  });
});
