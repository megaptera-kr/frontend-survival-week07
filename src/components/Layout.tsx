import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <div>
      <header>
        <h1>메가테라 푸드코트 키오스크</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
