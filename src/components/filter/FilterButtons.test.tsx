import { render, screen } from '@testing-library/react';
import FilterButtons from './FilterButtons';

describe('<FilterButtons />', () => {
  it('render category buttons', () => {
    const categories = ['전체', '중식', '한식'];

    render(<FilterButtons
      categories={categories}
      setFilterCategory={jest.fn}
    />);

    categories.forEach((category) => {
      screen.getByRole('button', { name: category });
    });
  });
});
