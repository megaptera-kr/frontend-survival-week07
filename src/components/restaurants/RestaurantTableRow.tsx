import { TableRow, Td, Ul, Li, Typography, Button } from '../../atoms';

import Food from '../../types/Food';

import Restaurant from '../../types/Restaurant';

type RestaurantTableRowProps = {
  restauant: Restaurant;
  handleClickAddMenu: (food: Food) => void;
};

export default function RestaurantTableRow({
  restauant,
  handleClickAddMenu,
}: RestaurantTableRowProps) {
  const { name, category, menu } = restauant;

  return (
    <TableRow>
      <Td>{name}</Td>
      <Td>{category}</Td>
      <Td>
        <Ul>
          {menu.map(({ id, name: itemName, price }) => (
            <Li key={`${id}-${itemName}-${price}`}>
              <Typography>{`${itemName}(${price.toLocaleString()}원)`}</Typography>
              <Button
                aria-label={itemName}
                type='button'
                role='button'
                name={itemName}
                onClick={() => handleClickAddMenu({ id, name: itemName, price })}
              >
                선택
              </Button>
            </Li>
          ))}
        </Ul>
      </Td>
    </TableRow>
  );
}
