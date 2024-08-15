import React, { useState } from "react";


const withCounter = (WrappedComponent, increaseValue) => {
  return function EnhancedComponent(props) {
    return (
      <div className="flex items-center justify-center flex-col gap-y-10">
        <WrappedComponent {...props} increase={increaseValue} />
      </div>
    );
  };
};



const Counter = ({ increase }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + increase)}>+</button>
    </div>
  );
};

const HigherOrder = () => {
  const CounterWithIncrementOne = withCounter(Counter, 1);
  const CounterWithIncrementFour = withCounter(Counter, 4);

  return (
    <div className="flex items-center justify-center flex-col gap-y-10">
      <CounterWithIncrementOne />
      <CounterWithIncrementFour />
    </div>
  );
};

export default HigherOrder;
