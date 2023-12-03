import { Typography } from '../atoms';

export default function Header() {
  return (
    <header>
      <Typography as='h1' $variant='heading_03' $color='white'>
        메가테라 푸드코트 키오스크
      </Typography>
    </header>
  );
}
