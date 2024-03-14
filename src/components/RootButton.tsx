import { useNavigate } from 'react-router-dom';

import { validatePathFormat } from '../utils/common';

import OrderKindType from '../types/OrderKindType';

type RootButtonProps = {
  orderKindType: OrderKindType;
  path: string;
};

function RootButton({ orderKindType, path }: RootButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${path}`, { state: { orderKindType } });
  };

  validatePathFormat(path);

  return (
    <button
      type='button'
      style={{
        fontSize: '0.8rem',
        padding: '1rem 1rem',
        margin: '1em',
      }}
      onClick={handleClick}
    >
      {orderKindType}
    </button>
  );
}

export default RootButton;
