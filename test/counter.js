import React, { useState } from 'react';
import Display from './display';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <Display value={count} />
      <button onClick={increment} data-testid="increment-button">Increment</button>
      <button onClick={decrement} data-testid="decrement-button">Decrement</button>
    </div>
  );
};

export default Counter;
