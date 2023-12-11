import { fireEvent, screen } from '@testing-library/react';

import { useRender } from '../../testHelper';

import { Table, TableBody } from '../../atoms';

import RestaurantTableRow from './RestaurantTableRow';

const context = describe;

describe('레스토랑아이템 컴포넌트', () => {
  const restauant = {
    id: '1',
    category: '중식',
    name: '메가반점',
    menu: [
      {
        id: '1',
        name: '짜장면',
        price: 8000,
      },
      {
        id: '2',
        name: '짬뽕',
        price: 8000,
      },
      {
        id: '3',
        name: '탕수육',
        price: 14000,
      },
    ],
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const handleClickAddMenu = jest.fn();

  context('렌더링', () => {
    it('짜장면, 짬뽕, 탕수육, 중식, 메가반점이 보여야한다.', () => {
      useRender(
        <Table>
          <TableBody>
            <RestaurantTableRow
              restauant={restauant}
              handleClickAddMenu={handleClickAddMenu}
            />
          </TableBody>
        </Table>,
      );

      const resutaurantText = [/중식/, /메가반점/, /짜장면/, /짬뽕/, /탕수육/];

      resutaurantText.forEach((text) => {
        expect(screen.getByText(text)).toBeInTheDocument();
      });
    });
  });

  context('버튼에 클릭이벤트가 가해졌을때', () => {
    it('handleClickAddMenu가 호출되어야 한다.', () => {
      useRender(
        <Table>
          <TableBody>
            <RestaurantTableRow
              restauant={restauant}
              handleClickAddMenu={handleClickAddMenu}
            />
          </TableBody>
        </Table>,
      );

      const button = screen.getByRole('button', { name: '짜장면' });

      fireEvent.click(button);

      expect(handleClickAddMenu).toBeCalledWith(restauant.menu[0]);
    });
  });
});
