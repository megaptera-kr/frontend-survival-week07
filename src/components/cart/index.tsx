import styled from 'styled-components';

import { Stack } from '../../atoms';

import Summary from './Summary';

import CartItem from './CartItem';

import CTAButtons from './CTAButtons';

import useCartStore from '../../hooks/useCartStore';

const CartWrraper = styled(Stack)`
  row-gap: 1.6rem;
`;

const SummaryCTAWrraper = styled(Stack)`
  background: ${({ theme }) => theme.palette.black};
  row-gap: 1.6rem;
  width: 100%;
  border: ${({ theme }) => `2px solid ${theme.palette['grey-400']}`};
  border-radius: 8px;
  padding: 0.8rem;
`;

export default function Cart() {
  const [{ menu }] = useCartStore();

  return (
    <CartWrraper $direction='column'>
      <SummaryCTAWrraper $direction='column'>
        <Summary />
        {menu.map((item, index) => {
          const key = `${item.name}-${index}`;
          return <CartItem key={key} item={item} index={index} />;
        })}
        <CTAButtons />
      </SummaryCTAWrraper>
    </CartWrraper>
  );
}
