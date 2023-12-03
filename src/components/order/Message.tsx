import styled from 'styled-components';

import { isEmpty } from 'lodash';

import { Typography } from '../../atoms';

import Order from '../../types/Order';

const ImportantTypo = styled(Typography)`
  text-decoration: underline;
`;

type MessgaeProps = { order: Order };

export default function Message({ order }: MessgaeProps) {
  const { id } = order;

  return !isEmpty(order) ? (
    <>
      <ImportantTypo as='h2' $variant='heading_02' $color='black'>
        주문이 완료되었습니다!
      </ImportantTypo>
      <Typography as='p' $variant='body_02' $color='black'>
        {`주문번호 ${id}`}
      </Typography>
    </>
  ) : (
    <ImportantTypo as='h2' $variant='heading_02' $color='black'>
      주문을 진행해주세요!
    </ImportantTypo>
  );
}
