import RootButton from '../components/RootButton';

import { validatePathFormat } from '../utils/common';
import { ORDER_TYPE_STORE, ORDER_TYPE_PACKAGE } from '../const/ConstOrder';

function RootButtonPage() {
  return (
    <div>
      <h2>원하시는 주문을 터치해주세요</h2>
      <div>
        <RootButton
          orderKindType={ORDER_TYPE_STORE}
          path={validatePathFormat('/order')}
        />
        <RootButton
          orderKindType={ORDER_TYPE_PACKAGE}
          path={validatePathFormat('/order')}
        />
      </div>
    </div>
  );
}

export default RootButtonPage;
