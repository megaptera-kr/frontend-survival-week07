import {
  act, render, renderHook, screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RestaurantsTableBodyFood from './RestaurantsTableBodyFood';
import useCartStore from '../hooks/useCartStore';
import food from '../fixtures/food';

const context = describe;

describe('RestaurantsTableBodyFood ', () => {
  const { result } = renderHook(() => useCartStore());
  function renderRestaurantsTableBodyFood() {
    render(<RestaurantsTableBodyFood menu={food} />);
  }

  beforeEach(() => {
    act(() => {
      result.current[1].reset();
    });
  });

  context('when render component', () => {
    it('show food content', () => {
      renderRestaurantsTableBodyFood();

      expect(screen.getByText(/짜장면/)).toBeInTheDocument();
      expect(screen.getByText(/짬뽕/)).toBeInTheDocument();
      expect(screen.getByText(/탕수육/)).toBeInTheDocument();
    });
  });

  context('when click button', () => {
    it('add cart one food', async () => {
      renderRestaurantsTableBodyFood();

      await userEvent.click(screen.getByRole('button', { name: '짜장면(8,000원)' }));

      expect(result.current[1].cart).toHaveLength(1);
    });

    it('add cart two foods', async () => {
      renderRestaurantsTableBodyFood();

      await userEvent.click(screen.getByRole('button', { name: '짜장면(8,000원)' }));
      await userEvent.click(screen.getByRole('button', { name: '짬뽕(8,000원)' }));

      expect(result.current[1].cart).toHaveLength(2);
    });
  });
});
