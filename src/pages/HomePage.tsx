import NavigationButton from '../components/NavigationButton';

export default function HomePage() {
  return (
    <div>
      <h2>원하시는 주문을 터치해주세요</h2>
      <div>
        <NavigationButton
          path="/order"
          style={{
            padding: '1rem',
            cursor: 'pointer',
          }}
        >
          매장 주문
        </NavigationButton>
        <NavigationButton
          path="/order"
          style={{
            padding: '1rem',
            cursor: 'pointer',
          }}
        >
          전체 포장
        </NavigationButton>
      </div>
    </div>
  );
}
