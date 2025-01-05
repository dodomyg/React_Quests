import { useRef } from "react";

const UseRefx = () => {
  const reff = useRef(null);

  const handleClick = () => {
    reff.current.style.backgroundColor = "red";
  };
  return (
    <div>
      <button onClick={handleClick}>1</button>
      <br />
      <button ref={reff}>2</button>
    </div>
  );
};

export default UseRefx;
