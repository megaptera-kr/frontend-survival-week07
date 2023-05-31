import { Link, useNavigate } from 'react-router-dom';

export default function OrderConfirm() {
  const navigate = useNavigate();
  const OrderConfirmClick = () => {
    navigate('/order/complete');
  };

  return (
    <div>
      <div>
        <span>주문내역 0개</span>
      </div>
      <div>
        <span>총 결제 예상금액 0원</span>
      </div>
      <ul>
        <div>
          <span>김치 6,000원</span>
          <button type="button">X</button>
        </div>
      </ul>
      <div>
        <Link to="/">
          <button type="button">
            취소
          </button>
        </Link>
        <button type="button" onClick={OrderConfirmClick}>주문하기</button>
      </div>
    </div>
  );
}
