import { useState } from 'react';

type useSetButtonReturn = [string, (v: string) => void];

function useSetButton(initialValie = ''): useSetButtonReturn {
  const [buttonName, setButtonName] = useState<string>(initialValie);

  const handleSetButtonName = (v: string) => {
    setButtonName(v);
  };

  return [buttonName, handleSetButtonName];
}

export default useSetButton;
