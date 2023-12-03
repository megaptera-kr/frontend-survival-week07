import classNames from 'classnames';
import { Menu } from '../../types';
import toLocaleString from '../utils/toLocaleString';
import Grid from './Grid';

type Props = {
  menuItem: Menu;
  isAdd?: boolean;
  onClick?: (menuItem: Menu) => void;
};

function MenuItem({
  menuItem, isAdd = true, onClick,
}: Props) {
  const handleClick = () => onClick && onClick(menuItem);

  const addedText = isAdd ? '--add' : '--delete';
  return (
    <Grid gridTemplateColumns={`200px ${onClick ? '100px' : ''}`} rowGap={16}>
      <button data-testid={`PickFoodBtn${menuItem.name}${addedText}`} className={classNames('txt', addedText)} onClick={handleClick}>{`${menuItem.name}(${toLocaleString(menuItem.price)})`}</button>
    </Grid>
  );
}

export default MenuItem;
