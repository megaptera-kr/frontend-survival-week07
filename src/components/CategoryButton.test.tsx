import { render, screen } from '@testing-library/react';

import CategoryButton from './CategoryButton';

describe('CategoryButton', () => {
  it('전체', () => {
    const selectedCategoryName = '전체';
    render(<CategoryButton selectedCategoryName={selectedCategoryName} />);
    screen.getByRole('button', { name: '전체' });
  });

  it('한식', () => {
    const selectedCategoryName = '한식';
    render(<CategoryButton selectedCategoryName={selectedCategoryName} />);
    screen.getByRole('button', { name: '한식' });
  });
});
