import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Complete from './Complete';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

function renderComplete() {
  render(
    <MemoryRouter>
      <Complete />
    </MemoryRouter>,
  );
}
describe('Complete', () => {
  it('renders Complete', () => {
    renderComplete();

    expect(screen.getByText('주문이 완료되었습니다!')).toBeInTheDocument();
  });
});
