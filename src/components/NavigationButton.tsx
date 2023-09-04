import React from 'react';
import { useNavigate } from 'react-router-dom';

type NavigationButtonProps = {
  path: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function NavigationButton({ path, children, ...rest }: NavigationButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button type="button" onClick={handleClick} {...rest}>
      {children}
    </button>
  );
}
