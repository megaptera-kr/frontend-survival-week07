import ResturantsList from './ResturantsList';
import Grid from '../components/Grid';
import Typo from '../components/Typo';
import useResturantsData from '../hooks/useResturantsData';

function Restaurants() {
  const resturantsList = useResturantsData();

  return (
    <Grid gridTemplateRows="20px 1fr">
      <Grid gridTemplateColumns=".4fr .4fr 1fr">
        <li><Typo level={3}>식당 이름</Typo></li>
        <li><Typo level={3}>종류</Typo></li>
        <li><Typo level={3}>메뉴</Typo></li>
      </Grid>
      {resturantsList && <ResturantsList resturantsList={resturantsList} />}
    </Grid>
  );
}

export default Restaurants;
