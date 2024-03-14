import { useNavigate } from 'react-router';

import Button from '../components/common/Button';

export default function IntroPage() {
  const navigation = useNavigate();
  const HandelOnClick = () => {
    navigation('/order');
  };

  return (
    <div>
      <h2>원하시는 주문을 터치해주세요</h2>
      <div>
        <Button text="🙋🏻‍♀️ 매장 주문" onClick={HandelOnClick} />
        <Button text="🛍️ 전체 포장" onClick={HandelOnClick} />
      </div>
    </div>
  );
}
