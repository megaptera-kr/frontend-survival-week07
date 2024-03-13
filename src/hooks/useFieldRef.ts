import { useRef } from 'react';

import { v4 as uuidv4 } from 'uuid';

function useFieldRef(prefix: string): [React.MutableRefObject<string>, string] {
  const id = useRef(`${prefix}-${uuidv4()}`);

  return [id, id.current];
}

export default useFieldRef;
