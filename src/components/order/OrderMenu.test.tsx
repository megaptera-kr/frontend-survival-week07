import { render, screen } from '@testing-library/react';
import receipt from '../../../fixtures/receipt';
import OrderMenu from './OrderMenu';

describe('OrderMenu', () => {
  it('render title', () => {
    render(<OrderMenu order={receipt} />);
    screen.getByText(/주문목록/);
  });

  it('renders list', () => {
    render(<OrderMenu order={receipt} />);

    expect(screen.getByText(`주문번호${receipt.id}`));
    expect(screen.getByText('주문목록'));

    const listItem = screen.getAllByRole('listitem');
    expect(listItem).toHaveLength(receipt.menu.length);

    receipt.menu.forEach((food) => {
      expect(screen.getByText(new RegExp(`${food.name} ${food.price.toLocaleString()}원`)));
    });
  });
});
