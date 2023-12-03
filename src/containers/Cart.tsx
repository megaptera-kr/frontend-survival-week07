import { useNavigate } from 'react-router';
import { Order } from '../../types';
import Grid from '../components/Grid';
import MenuItem from '../components/MenuItem';
import Typo from '../components/Typo';
import useStore, { useSelector } from '../hooks/useStore';
import toLocaleString from '../utils/toLocaleString';
import { getTotalPrice } from '../reducers/selector';
import { routePath } from '../routes';
import { payment } from '../actions/domainActions';
import { deleteCart } from '../actions/uiActions';

function Cart() {
  const navigate = useNavigate();
  const { dispatch } = useStore();

  const cart = useSelector((state) => state.ui.cart);
  const totalPrice = useSelector(getTotalPrice);

  const handlePayment = () => {
    const successPayment = (order: Order) => {
      navigate(`${routePath.orderComplate}?orderId=${order.id}`);
    };

    dispatch(payment(successPayment));
  };

  return (
    <div data-testid="Cart" className="cart">
      <Grid gridTemplateRows="20px 1fr">
        <section>
          <p data-testid="CartCount">
            <Typo>
              주문내역
              {' '}
              {cart.length}
              개
            </Typo>
          </p>

          <p data-testid="CartPrice">
            <Typo>
              총 결제 예상금액
              {' '}
              {`${toLocaleString(totalPrice)}`}
            </Typo>
          </p>
        </section>
        <Grid>
          <ul className="cart-list">
            <Grid>
              {cart.map((menu, index) => (
                <li data-testid="CartItem" key={`${menu.id}_${index}`}>
                  <MenuItem
                    isAdd={false}
                    menuItem={menu}
                    onClick={(menuItem) => {
                      dispatch(deleteCart(menuItem));
                    }}
                  />
                </li>
              ))}
            </Grid>
          </ul>
          <Grid gridTemplateColumns="1fr 1fr">
            <button data-testid="Cancel" type="button" onClick={() => { navigate(routePath.root); }}>취소</button>
            <button data-testid="Payment" type="button" onClick={handlePayment}>
              주문하기
            </button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cart;
