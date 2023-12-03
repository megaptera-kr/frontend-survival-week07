import styled from 'styled-components';

import { Stack, Typography } from '../../atoms';

import Order from '../../types/Order';

const OrderListWrraper = styled(Stack)`
  row-gap: 0rem;
`;

const ImportantTypo = styled(Typography)`
  text-decoration: underline;
`;

type MenusProps = { order: Order };

export default function Menus({ order }: MenusProps) {
  const { menu, totalPrice } = order;

  const totalPriceText = totalPrice?.toLocaleString();

  return (
    <>
      <OrderListWrraper $direction='column' id='receipt-menus'>
        <ImportantTypo as='h3' $variant='heading_01' $color='black'>
          주문목록
        </ImportantTypo>
        {menu.map(({ name, price }) => {
          const priceText = price.toLocaleString();
          return (
            <Typography
              as='p'
              $variant='body_02'
              $color='black'
              key={Math.random()}
            >
              {`${name}(${priceText}원)`}
            </Typography>
          );
        })}
      </OrderListWrraper>

      <ImportantTypo as='h3' $variant='heading_01' $color='black'>
        {`총 가격: ${totalPriceText}원`}
      </ImportantTypo>
    </>
  );
}
