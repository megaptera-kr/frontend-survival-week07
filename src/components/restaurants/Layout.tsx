import React from 'react';
import { Outlet } from 'react-router';

function Layout() {
  return (
    <>
      <div>
        <h1>메가테라 푸드코트 키오스크</h1>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
