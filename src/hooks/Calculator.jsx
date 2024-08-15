import { useState } from "react";

const Calculator = () => {
  const btns = [
    { name: "C", value: "C" },
    { name: "%", value: "%" },
    { name: "÷", value: "/" },
    { name: "7", value: 7 },
    { name: "8", value: 8 },
    { name: "9", value: 9 },
    { name: "×", value: "*" },
    { name: "4", value: 4 },
    { name: "5", value: 5 },
    { name: "6", value: 6 },
    { name: "-", value: "-" },
    { name: "1", value: 1 },
    { name: "2", value: 2 },
    { name: "3", value: 3 },
    { name: "+", value: "+" },
    { name: "0", value: 0 },
    { name: ".", value: "." },
    { name: "=", value: "=" },
  ];

  const [input, setInput] = useState("");

  const onCLickBtn = (btn) => {
    try {
      if (btn.name === "C") {
        setInput("");
        return;
      }
      if(input!=="" && btn.name === "="){
        setInput(eval(input));
        return;
      }
      else{
        setInput(input + btn.value);
      }
      return;
    } catch (error) {
        setInput("error");
        return;
    }
  };

  return (
    <div>
      <form>
        <input
          className="border-black border-2"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="my-4">
          <div className="grid grid-cols-4">
            {btns?.map((btn, i) => (
              <button
                onClick={() => onCLickBtn(btn)}
                key={i}
                type="button"
                className="w-24 h-10 rounded-md bg-slate-300"
              >
                {btn.name}
              </button>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Calculator;
