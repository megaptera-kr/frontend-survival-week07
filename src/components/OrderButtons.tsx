import { useNavigate } from 'react-router-dom';

import Button from './common/Button';

export default function OrderButtons() {
  const navigation = useNavigate();
  const HandelOnClick = () => {
    navigation('/order');
  };

  return (
    <div>
      <Button text="🙋🏻‍♀️ 매장 주문" onClick={HandelOnClick} />
      <Button text="🛍️ 전체 포장" onClick={HandelOnClick} />
    </div>
  );
}
