import RootButton from '../components/RootButton';

import { ORDER_TYPE_STORE, ORDER_TYPE_PACKAGE } from '../const/ConstOrder';

function RootButtonPage() {
  return (
    <div>
      <h2>원하시는 주문을 터치해주세요</h2>
      <div>
        <RootButton orderKindType={ORDER_TYPE_STORE} path='/order' />
        <RootButton orderKindType={ORDER_TYPE_PACKAGE} path='/order' />
      </div>
    </div>
  );
}

export default RootButtonPage;
