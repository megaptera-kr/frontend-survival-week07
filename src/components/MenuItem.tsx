import { Menu } from '../../types';
import toLocaleString from '../utils/toLocaleString';
import Grid from './Grid';

type Props = {
  menuItem: Menu;
  onClick?: (menuItem: Menu) => void;
};

function MenuItem({
  menuItem, onClick,
}: Props) {
  const handleClick = () => onClick && onClick(menuItem);

  return (
    <Grid gridTemplateColumns={`200px ${onClick ? '100px' : ''}`} rowGap={16}>
      <button data-testid={`PickFoodBtn${menuItem.name}`} className="txt" onClick={handleClick}>{`${menuItem.name}(${toLocaleString(menuItem.price)})`}</button>
    </Grid>
  );
}

export default MenuItem;
