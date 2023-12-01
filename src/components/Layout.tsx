import { Outlet } from 'react-router';

function Layout() {
  return (
    <>
      <h1>메가테라 푸드키트 키오스크</h1>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
