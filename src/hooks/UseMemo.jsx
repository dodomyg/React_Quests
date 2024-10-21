import { useMemo, useState } from "react";

const UseMemo = () => {
  const [num, setNum] = useState(0);
  const [input, setInput] = useState(0);
  const expensive = (x) => {
    console.log("expensive...");
    for (let i = 0; i < 1000000000; i++) {}
    return x * 2;
  };

  const val = useMemo(() => {
    return expensive(input);
  }, [input]);

  return (
    <div>
      <div>{num}</div>
      <button onClick={() => setNum(num + 1)}>+</button>
      <br />
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div>Expensive val : {val}</div>
    </div>
  );
};

export default UseMemo;
