import { fireEvent, render, screen } from '@testing-library/react';
import CategoryButton from './CategoryButton';

const context = describe;

const setFilterCategory = jest.fn();

describe('<CategoryButton />', () => {
  context('click category button', () => {
    it('execute handle click function', () => {
      const category = '중식';

      render(<CategoryButton
        category={category}
        setFilterCategory={setFilterCategory}
      />);

      const button = screen.getByRole('button', { name: category });

      fireEvent.click(button);

      expect(setFilterCategory).toHaveBeenCalledWith(category);
    });
  });
});
