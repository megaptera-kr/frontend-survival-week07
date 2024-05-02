import { render, screen } from '@testing-library/react';
import RestaurantsTable from '.';
import fixture from '../../fixture';

describe('RestaurantsTable 컴포넌트', () => {
  const { restaurants } = fixture;
  beforeEach(() => {
    render(<RestaurantsTable restaurants={restaurants} />);
  });
  it('올바르게 렌더링된다.', () => {
    screen.getByText(/짜장면/);
  });
});
