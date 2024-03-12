import { useNavigate } from 'react-router-dom';

type RootButtonProps = {
  buttonTitle: string;
  path: string;
};

export default function RootButton({ buttonTitle, path }: RootButtonProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${path}`, { state: { buttonTitle } });
  };

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
      {buttonTitle}
    </button>
  );
}
