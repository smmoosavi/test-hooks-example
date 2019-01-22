import { useState } from 'react';

export const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const increment = (step = 1) => setCount(v => v + step);
  return [count, increment];
};
