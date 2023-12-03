import styled from 'styled-components';

import { Stack, Typography, Button } from '../../atoms';

import useCartCTAButtons from '../../hooks/useCartCTAButtons';

import Food from '../../types/Food';

const Item = styled(Stack)`
  column-gap: 1.6rem;
  align-items: center;

  button {
    background: ${({ theme }) => theme.palette.white};
    color: ${({ theme }) => theme.palette.black};
    margin-left: auto;

    &:hover {
      color: ${({ theme }) => theme.palette.white};
      background: ${({ theme }) => theme.palette['green-900']};
    }
  }
`;

type CartItemProps = {
  item: Food;
  index: number;
};

export default function CartItem({ item, index }: CartItemProps) {
  const { handleClickRemove } = useCartCTAButtons();

  const { name, price } = item;

  const priceText = price.toLocaleString();

  return (
    <Item $direction='row' key={Math.random()}>
      <Typography as='span' $color='white' $variant='body_03'>
        {name}
        (
        {priceText}
        원)
      </Typography>
      <Button
        type='button'
        name={`${name}cancel`}
        value={`${name}cancel`}
        onClick={() => handleClickRemove(index)}
      >
        X
      </Button>
    </Item>
  );
}
