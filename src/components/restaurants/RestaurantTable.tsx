import { TableBody, Table, TableRow, Td } from '../../atoms';

import RestaurantTableRow from './RestaurantTableRow';

import useCartStore from '../../hooks/useCartStore';

import Restaurant from '../../types/Restaurant';

import Food from '../../types/Food';

type RestaurantTableProps = {
  restaurants: Restaurant[];
};

export default function RestaurantTable({ restaurants }: RestaurantTableProps) {
  const [, store] = useCartStore();

  const handleClickAddMenu = (food: Food) => {
    store.addMenu(food);
  };

  return (
    <Table>
      <TableBody>
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <RestaurantTableRow
              key={restaurant.id}
              restauant={restaurant}
              handleClickAddMenu={handleClickAddMenu}
            />
          ))
        ) : (
          <TableRow>
            <Td>메뉴가 존재하지 않습니다.</Td>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
