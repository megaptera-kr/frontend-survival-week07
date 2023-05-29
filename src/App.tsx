// 1. 영수증 5초 구현 [x]
// 2. 로컬 스토리지 상태 관리 [x]
// 3. 라우터 실습
// 4. 테스트 코드 작성

// import { useInterval, useLocalStorage } from 'usehooks-ts';

import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import routes from './routes';

// const emptyReceipt = {} as Receipt;

export default function App() {
  // const [receipt, setReceipt] = useLocalStorage<Receipt>('receipt', emptyReceipt);

  // useInterval(
  //   () => {
  //     setReceipt(emptyReceipt);
  //   },
  //   receipt ? 5000 : null,
  // );

  const router = createBrowserRouter(routes);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
