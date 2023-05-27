import { stringify } from 'querystring';
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import useDispatch from '../hooks/useDispatch';
import useFetchReceipt from '../hooks/useFetchReceipt';
import useFetchReceiptId from '../hooks/useFetchReceiptId';
import { insertID, insertReceipt } from '../store/Stores';
import calcTotalPrice from '../utils/calcTotalPrice';
import storeGetSelectedFood from '../utils/storeGetSelectedFood';

export default function ConfirmButton() {
  const { fetchReceiptID } = useFetchReceiptId();
  const { fetchReceipt } = useFetchReceipt();

  const navigate = useNavigate();

  const menu = storeGetSelectedFood();
  const totalPrice = calcTotalPrice();

  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  async function handleClick() {
    const { id } = await fetchReceiptID({ menu, totalPrice });
    const { order } = await fetchReceipt(id);
    dispatch(insertID(id));
    dispatch(insertReceipt(JSON.stringify(order)));
    navigate(`/order/complete?orderId=${id}`);
  }
  return (
    <>
      <NavLink to="/">
        <button type="button">취소</button>
      </NavLink>
      <button type="button" onClick={handleClick}>주문하기</button>
    </>
  );
}
