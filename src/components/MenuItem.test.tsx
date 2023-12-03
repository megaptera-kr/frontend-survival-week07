// 텍스트만 있을 때
// 텍스트 + onClick 있을때

import { render, screen } from '@testing-library/react';
import MenuItem from './MenuItem';
import foods from '../../fixtures/foods';

describe('MenuItem', () => {
  const props = { menuItem: foods[0], index: 0 };

  test('메뉴를 넣으면 메뉴 이름과 금액을 렌더링한다.', () => {
    render(<MenuItem {...props} />);
    const menuName = screen.getByText(/짜장면/);
    const menuPrice = screen.getByText(/\(8,000원\)/);

    expect(menuName).toBeInTheDocument();
    expect(menuPrice).toBeInTheDocument();
  });

  test('"메뉴 선택" 이벤트를 주입하면, "메뉴 선택" 버튼을 렌더링한다.', () => {
    render(<MenuItem {...props} onClick={() => {}} />);

    const element = screen.getByTestId('PickFoodBtn짜장면--add');

    expect(element).toBeInTheDocument();
  });
});
