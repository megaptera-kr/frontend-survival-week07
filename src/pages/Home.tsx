import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h2>원하시는 주문을 터치해주세요</h2>
      <div>
        <Link
          style={{
            background: '#e9e9e9',
            padding: '1rem',
            display: 'inline-block',
            border: '1px solid black ',
            borderRadius: '5px',
          }}
          to="/order"
        >
          매장주문
        </Link>
        <Link
          style={{
            background: '#e9e9e9',
            padding: '1rem',
            border: '1px solid black ',
            borderRadius: '5px',
            display: 'inline-block',
          }}
          to="/order"
        >
          전체포장
        </Link>
      </div>
    </>
  );
}

export default Home;
