import { render, screen } from '@testing-library/react';
import MenuRow from './MenuRow';
import fixtures from '../../fixtures';

describe('MenuRow', () => {
  it('render elements', () => {
    const { foods } = fixtures;
    render(<MenuRow food={foods[0]} />);
    screen.getByText(/짜장면/);
  });

  // 컴포넌트 내부 함수는 어떻게 테스트 해야할까?
//   context('when user click button', () => {
//     it('calls addOrder handler', () => {
//       fireEvent.click(screen.getByText(/짜장면/));
//     });
//   });
});
