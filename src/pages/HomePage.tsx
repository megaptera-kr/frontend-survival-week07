import Typo from '../components/Typo';
import { routePath } from '../routes';

function Home() {
  return (
    <div data-testid="HomePage" className="home">
      <Typo level={2}>원하시는 주문을 터치해주세요</Typo>
      <section className="btn-group">
        <Typo.Link to={routePath.order} level={3}>
          매장 주문
        </Typo.Link>

        <Typo.Link to={routePath.order} level={3}>
          전체 포장
        </Typo.Link>
      </section>
    </div>
  );
}

export default Home;
