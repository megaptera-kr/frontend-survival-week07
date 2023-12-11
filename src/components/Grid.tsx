import { ReactNode } from 'react';

function Grid({
  children, gridTemplateColumns = '1fr', columnGap = 16, rowGap = 16, gridTemplateRows = '1fr', alignItems = '',
}: { children: ReactNode; gridTemplateColumns?: string; gridTemplateRows?: string; columnGap?: number; rowGap?: number; alignItems?: string; }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns, columnGap, rowGap, gridTemplateRows, alignItems,
    }}
    >
      {children}
    </div>
  );
}

export default Grid;
