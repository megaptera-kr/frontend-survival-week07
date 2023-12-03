import { TableHead, Th, TableBody, Table, TableRow } from '../../atoms';

import tableHeads from '../../constants/tableHeads';

import Restaurant from '../../types/Restaurant';

import ItemRow from './ItemRow';

type MenusProps = {
  restaurants: Restaurant[];
};

export default function Menus({ restaurants }: MenusProps) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {tableHeads.map((item) => (
            <Th key={item}>{item}</Th>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {restaurants?.map((restaurant) => (
          <ItemRow key={restaurant.id} restauant={restaurant} />
        ))}
      </TableBody>
    </Table>
  );
}
