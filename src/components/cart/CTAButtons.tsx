import styled from 'styled-components';

import { Button, Stack } from '../../atoms';

import useCartCTAButtons from '../../hooks/useCartCTAButtons';

const CTAButtonsWrraper = styled(Stack)`
  column-gap: 1.6rem;
`;

export default function CTAButtons() {
  const { handleClickCancel, handleClickOrder } = useCartCTAButtons();

  return (
    <CTAButtonsWrraper $direction='row'>
      <Button
        type='button'
        onClick={handleClickCancel}
        className='cta-order-button'
      >
        취소
      </Button>
      <Button
        type='button'
        onClick={handleClickOrder}
        className='cta-order-button'
      >
        주문하기
      </Button>
    </CTAButtonsWrraper>
  );
}
