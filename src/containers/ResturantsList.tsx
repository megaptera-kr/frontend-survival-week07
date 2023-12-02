import { Menu, RestaurantList } from '../../types';
import MenuItem from '../components/MenuItem';
import { Loading } from './Resturants';
import Grid from '../components/Grid';
import useStore from '../hooks/useStore';
import { addCart } from '../reducers/uiReducer';

function ResturantsList({
  resturantsList,
}: {
  resturantsList: RestaurantList;
}) {
  const { dispatch } = useStore();

  const handleMenuClick = ({ menuItem }: { menuItem: Menu }) => {
    dispatch(addCart(menuItem));
  };

  if (!resturantsList) return <Loading />;

  return (
    <div data-testid="ResturantsList">
      {resturantsList.map((row) => (
        <ul
          data-testid={`ResturantsItem${row.id}`}
          key={row.id}
        >
          <Grid gridTemplateColumns=".3fr .3fr 1fr">
            <li>{row.name}</li>
            <li>{row.category}</li>
            <li>
              <ul className="row lv2">
                {row.menu.map((menuItem, index) => (
                  <li key={index}>
                    <MenuItem
                      menuItem={menuItem}
                      index={index}
                      onClick={handleMenuClick}
                    />
                  </li>
                ))}
              </ul>
            </li>
          </Grid>
        </ul>
      ))}
    </div>
  );
}

export default ResturantsList;
