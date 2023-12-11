import { ReactNode } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { RoutePathType } from '../routes';

interface TypoProps { children: ReactNode; testId?: string; level?: number; theme?: 'link' }

function Typo({
  children, level, theme, testId,
}: TypoProps) {
  return (
    <span data-testid={testId} className={classNames('typo', level && `--level${level}`, theme && `--${theme}`)}>
      {children}
    </span>
  );
}

interface TypoLinkProps extends TypoProps {
  to: RoutePathType;
}

function LinkTypo({ to, children, ...typoProps }: TypoLinkProps) {
  return (
    <Typo testId="Link" {...typoProps} theme="link">
      <Link to={to}>
        {children}
      </Link>
    </Typo>
  );
}

Typo.Link = LinkTypo;

export default Typo;
