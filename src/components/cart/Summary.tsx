import { Stack, Typography } from '../../atoms';

import calculateTotalPrice from '../../utils/calculateTotalPrice';

import useCartStore from '../../hooks/useCartStore';

export default function Summary() {
  const [{ menu }] = useCartStore();

  const totalPrice = calculateTotalPrice(menu)?.toLocaleString();

  const count = menu.length;

  return (
    <Stack $direction='column'>
      <Typography $variant='body_03' $color='white'>
        {`주문내역 ${count}개`}
      </Typography>
      <Typography $variant='body_03' $color='white'>
        {`총 결제 예상금액 ${totalPrice}원`}
      </Typography>
    </Stack>
  );
}
