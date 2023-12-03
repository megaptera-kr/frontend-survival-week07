import { Outlet } from 'react-router';
import { ClipLoader } from 'react-spinners';
import { useMemo } from 'react';
import Typo from './components/Typo';
import { useSelector } from './hooks/useStore';

function Loading() {
  return (
    <ClipLoader
      color="#0064FF"
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

function Error() {
  return (
    <div>
      <Typo level={1}>
        E R R O R
      </Typo>
    </div>
  );
}

function Layout() {
  const fetchStatus = useSelector((state) => state.ui.fetchStatus);

  const renderContent = () => {
    if (fetchStatus === 'REQUEST') return <Loading />;
    if (fetchStatus === 'FAIL') return <Error />;

    return <Outlet />;
  };

  return (
    <div className="layout">
      <header>
        <Typo level={1}>메가테라 푸드코트 키오스크</Typo>
      </header>
      <main>
        {renderContent()}
      </main>
    </div>
  );
}

export default Layout;
