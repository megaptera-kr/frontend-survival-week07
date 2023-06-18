import { Outlet } from 'react-router';

import Title from './Title';

export default function Layout() {
  return (
    <div>
      <Title />
      <Outlet />
    </div>
  );
}
