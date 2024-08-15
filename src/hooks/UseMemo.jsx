import React, { useMemo, useState } from 'react';

function ExampleComponent() {
    
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  // Heavy computation function
  const expensiveCalculation = (num) => {
    console.log('Calculating...');
    let total = 0;
    for (let i = 0; i < 1000000000; i++) {
      total += num;
    }
    return total;
  };

  // Memoize the result of the expensive calculation
  const memoizedValue = useMemo(() => expensiveCalculation(number), [number]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <h2>Expensive Calculation Result: {memoizedValue}</h2>
      <button onClick={() => setNumber(number + 1)}>Increment Number</button>
    </div>
  );
}

export default ExampleComponent;
