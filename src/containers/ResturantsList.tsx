import { RestaurantList } from '../../types';
import MenuItem from '../components/MenuItem';
import Grid from '../components/Grid';
import useStore from '../hooks/useStore';
import Typo from '../components/Typo';
import { addCart } from '../actions/uiActions';

function ResturantsList({
  resturantsList,
}: {
  resturantsList: RestaurantList;
}) {
  const { dispatch } = useStore();

  return (
    <div data-testid="ResturantsList" className="resturants-wrapper">
      <Grid>
        {resturantsList.map((row) => (
          <ul
            data-testid={`ResturantsItem${row.id}`}
            key={row.id}
            className="container section"
          >
            <Grid gridTemplateColumns=".3fr .3fr 1fr">
              <li><Typo>{row.name}</Typo></li>
              <li><Typo>{row.category}</Typo></li>
              <li>
                <ul>
                  <Grid>
                    {row.menu.map((menuItem, index) => (
                      <li key={index}>
                        <MenuItem
                          menuItem={menuItem}
                          onClick={(menuItem) => {
                            dispatch(addCart(menuItem));
                          }}
                        />
                      </li>
                    ))}
                  </Grid>
                </ul>
              </li>
            </Grid>
          </ul>
        ))}
      </Grid>
    </div>
  );
}

export default ResturantsList;
