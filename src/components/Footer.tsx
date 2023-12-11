import { Typography, Hr } from '../atoms';

export default function Footer() {
  return (
    <footer>
      <Hr />
      <Typography as='p' $color='grey-400'>
        Copyright 2023. JH Inc. All rights reserved.
      </Typography>
    </footer>
  );
}
