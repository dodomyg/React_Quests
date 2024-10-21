
const Child = ({ text, hanldeClick }) => {
  console.log("child rendered . .. . .");
  return <button onClick={hanldeClick}>{text}</button>;
};

export default Child;
