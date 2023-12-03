import { screen } from '@testing-library/react';

import { useRender } from '../../testHelper';

import Menus from './RestaurantTable';

import fixtures from '../../../fixtures';

const context = describe;

describe('레스토랑 테이블 컴포넌트', () => {
  context('메뉴판이 존재할때', () => {
    const { restaurants } = fixtures;
    it('메뉴들이 보여야한다.', () => {
      useRender(<Menus restaurants={restaurants} />);

      const textList = [/짬뽕/, /기본카레/, /제육김밥/, /짜장면/];

      textList.forEach((text) => {
        expect(screen.getByText(text)).toBeInTheDocument();
      });
    });
  });

  context('만족하는 메뉴가 없을때', () => {
    it('메뉴가 존재하지 않아야한다.', () => {
      useRender(<Menus restaurants={[]} />);

      expect(screen.getByText(/메뉴가 존재하지 않습니다./)).toBeInTheDocument();
    });
  });
});
