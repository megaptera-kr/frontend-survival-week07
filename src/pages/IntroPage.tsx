import { useNavigate } from 'react-router';

import styled from 'styled-components';

import { Button, Stack, Typography } from '../atoms';

import PATHNAME from '../constants/pathname';

const NavigateButton = styled(Button)`
  flex: 1;
  height: 4.8rem;

  background: white;
  color: black;

  &:hover {
    border: ${({ theme }) => `1px solid ${theme.palette.black}`};
    background: white;
    color: black;
  }
`;

const IntroWrraper = styled(Stack)`
  row-gap: 1.6rem;
`;

const NavigateWrraper = styled(Stack)`
  margin-top: 1.6rem;
  column-gap: 1.6rem;
`;

export default function IntroPage() {
  const navigate = useNavigate();

  const handleClickNext = () => {
    navigate(PATHNAME.Order);
  };
  return (
    <IntroWrraper $direction='column'>
      <Typography as='h2' $variant='heading_02' $color='white'>
        원하시는 주문을 터치해주세요
      </Typography>

      <NavigateWrraper $direction='row'>
        <NavigateButton type='button' onClick={handleClickNext}>
          매장 주문
        </NavigateButton>
        <NavigateButton type='button' onClick={handleClickNext}>
          전체 포장
        </NavigateButton>
      </NavigateWrraper>
    </IntroWrraper>
  );
}
