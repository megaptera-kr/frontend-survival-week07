import { screen, render } from '@testing-library/react';

import HomePage from './HomePage';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('HomePage', () => {
  it('HomePage를 렌더링 한다.', () => {
    render(<HomePage />);

    screen.getByText(/원하시는 주문을 터치해주세요/);
    screen.getByText(/매장 주문/);
    screen.getByText(/전체 포장/);
  });
});
