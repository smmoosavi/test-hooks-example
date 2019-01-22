// useCounter.js

import { useState } from 'react';

export const useCounter = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount);
  const increment = (step = 1) => setCount(v => v + step);
  return [count, increment];
};
