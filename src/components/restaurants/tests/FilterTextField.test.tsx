import { fireEvent, render, screen } from '@testing-library/react';

import FilterTextField from '../FilterTextField';

describe('FilterTextField', () => {
  const filterText = '메가반점';

  const setFilterText = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderFilterTextField() {
    render((<FilterTextField
      filterText={filterText}
      setFilterText={setFilterText}
    />));
  }

  it('renders elements', () => {
    renderFilterTextField();

    screen.getByLabelText(/검색/);
    screen.getByPlaceholderText(/식당 이름을 입력해주세요/);
    screen.getByDisplayValue(filterText);
  });

  it('listens for text change event', () => {
    renderFilterTextField();

    fireEvent.change(screen.getByLabelText(/검색/), {
      target: { value: 'Test Text' },
    });

    expect(setFilterText).toBeCalledWith('Test Text');
  });
});
