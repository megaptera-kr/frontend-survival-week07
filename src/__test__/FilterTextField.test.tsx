import { fireEvent, render, screen } from '@testing-library/react';

import FilterTextField from '../components/FilterTextField';

describe('<FilterTextField />', () => {
  const query = '메가반점';
  const setQuery = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('render without crash', () => {
    render(<FilterTextField query={query} setQuery={setQuery} />);
    screen.getByLabelText('검색');
  });

  it('Call the change handler', () => {
    render(<FilterTextField query={query} setQuery={setQuery} />);

    fireEvent.change(screen.getByLabelText('검색'), { target: { value: 'restaurants' } });
    expect(setQuery).toBeCalledWith('restaurants');
  });
});
