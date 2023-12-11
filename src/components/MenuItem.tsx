import classNames from 'classnames';
import { Menu } from '../../types';
import toLocaleString from '../utils/toLocaleString';
import Grid from './Grid';
import Typo from './Typo';

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
  const menuText = `${menuItem.name}(${toLocaleString(menuItem.price)})`;

  return (
    <Grid gridTemplateColumns={`200px ${onClick ? '100px' : ''}`} rowGap={16}>
      {
        onClick ? (
          <button
            data-testid={`PickFoodBtn${menuItem.name}${addedText}`}
            className={classNames('txt', addedText)}
            onClick={handleClick}
          >
            {menuText}
          </button>
        ) : (
          <Typo>{menuText}</Typo>
        )
      }

    </Grid>
  );
}

export default MenuItem;
