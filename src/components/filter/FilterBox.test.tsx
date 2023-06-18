import { render, screen } from '@testing-library/react';
import FilterBox from './FilterBox';

describe('<FilterBox />', () => {
  it('render search bar and filter buttons', () => {
    const categories = ['전체', '중식', '한식'];

    render(<FilterBox
      categories={categories}
      filterText=""
      setFilterText={jest.fn()}
      setFilterCategory={jest.fn()}
    />);

    screen.getByLabelText(/검색/);

    screen.getByRole('button', { name: /전체/ });
    screen.getByRole('button', { name: /한식/ });
  });
});
