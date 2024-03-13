import RootButton from '../components/RootButton';

function RootButtonPage() {
  return (
    <div>
      <h2>원하시는 주문을 터치해주세요</h2>
      <div>
        <RootButton buttonTitle='매장 주문' path='/order' />
        <RootButton buttonTitle='전체 포장' path='/order' />
      </div>
    </div>
  );
}

export default RootButtonPage;
