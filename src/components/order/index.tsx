import styled from 'styled-components';

import { isEmpty } from 'lodash';
import { Button, Stack } from '../../atoms';

import Menus from './Menus';

import Message from './Message';

import useFetchOrder from '../../hooks/useFetchOrder';

const OrderWrraper = styled(Stack)`
  width: 80%;
  border: ${({ theme }) => `2px solid ${theme.palette['grey-400']}`};
  row-gap: 0.8rem;
  border-radius: 8px;
  text-align: center;
  margin: 0 auto;
  padding: 1.2rem;
  background: ${({ theme }) => theme.palette.white};
`;

const BackButtom = styled(Button)`
  background: transparent;
  color: black;
  text-decoration: underline;
  height: 4.8rem;
`;

type OrderProps = {
  orderId: string;
  handleClickBack: () => void;
};

export default function Order({ orderId, handleClickBack }: OrderProps) {
  const order = useFetchOrder({ orderId });

  return (
    <Stack $direction='column' id='receipt-wrraper'>
      <OrderWrraper $direction='column' id='receipt'>
        <Message order={order} />

        {!isEmpty(order) ? <Menus order={order} /> : null}

        <BackButtom type='button' onClick={handleClickBack}>
          메인화면으로 돌아가기
        </BackButtom>
      </OrderWrraper>
    </Stack>
  );
}
