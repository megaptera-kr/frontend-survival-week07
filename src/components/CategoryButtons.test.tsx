import { render, screen } from '@testing-library/react';

import CategoryButtons from './CategoryButtons';

jest.mock('../hooks/useFetchCategories');

describe('CategoryButtons', () => {
  it('렌더링', () => {
    render(<CategoryButtons />);
    screen.getByRole('button', { name: '전체' });
    screen.getByRole('button', { name: '한식' });
    screen.getByRole('button', { name: '일식' });
    screen.getByRole('button', { name: '중식' });
  });
});
