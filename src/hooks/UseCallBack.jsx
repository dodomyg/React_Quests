import { useCallback, useState } from "react";
import Child from "./Child";

const UseCallBack = () => {
  const [c, setC] = useState(0);

  const handleClick = useCallback(() => {
    setC(c + 1);
  },[c]);

  return (
    <div>
      <h1>{c}</h1>
      <button onClick={handleClick}>Add</button>

      <div>
        <Child hanldeClick={handleClick} text="Child okokok" />
      </div>
    </div>
  );
};

export default UseCallBack;
