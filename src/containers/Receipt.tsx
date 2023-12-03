import { Navigate } from 'react-router';
import MenuItem from '../components/MenuItem';
import { useSelector } from '../hooks/useStore';
import Typo from '../components/Typo';
import Grid from '../components/Grid';
import { routePath } from '../routes';

function Receipt() {
  const receipt = useSelector((state) => state.ui.receipt);

  if (!receipt) return <Navigate to={routePath.order} />;

  return (
    <div data-testid="OrderDetailPage">
      <Grid>
        <section>
          <p>
            <Typo level={2}>주문이 완료되었습니다!</Typo>
          </p>
          <p className="container section" data-testid="ReceiptId">
            <Typo>{`주문번호 ${receipt.id}`}</Typo>
          </p>
        </section>
        <section>
          <Typo level={2}>주문목록</Typo>
          <ul className="container section">
            <Grid>
              {receipt.menu.map((menu, index) => (
                <MenuItem
                  key={index}
                  menuItem={menu}
                />
              ))}
            </Grid>
          </ul>
        </section>
        <section>
          <Typo.Link to={routePath.root} level={2}>메인화면으로 돌아가기</Typo.Link>
        </section>
      </Grid>
    </div>
  );
}

export default Receipt;
