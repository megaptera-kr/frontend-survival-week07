import { TableRow, Td, Ul, Li, Typography, Button } from '../../atoms';

import Restaurant from '../../types/Restaurant';

import useCartStore from '../../hooks/useCartStore';

type RowProps = {
  restauant: Restaurant;
};

export default function ItemRow({ restauant }: RowProps) {
  const { name, category, menu } = restauant;

  const [, store] = useCartStore();

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
                onClick={() => store.addMenu({ id, name: itemName, price })}
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
