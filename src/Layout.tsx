import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <h1>메가테라 푸드코드 키오스크</h1>
      <Outlet />
    </div>
  );
}
