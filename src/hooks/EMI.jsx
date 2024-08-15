import { useState } from "react";

const EMI = () => {
  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [processingFee, setProcessingFee] = useState(0);
  const time = ["12", "24", "36", "48", "60"];
  const [selectedTime, setSelectedTime] = useState("12");

  const [downPayment, setDownPayment] = useState(0);
  const [emi, setEmi] = useState(0);

  const [cost, setCost] = useState(0);

  const updateEmi = () => {
  }

  const updateDownPayment = () => {

  }

  return (
    <div className="my-10">
      <form className="flex items-center justify-center flex-col gap-x-3">
        <label className="mx-2">
          Principle
          <input
            type="number"
            value={principle}
            onChange={(e) => setPrinciple(e.target.value)}
          />
        </label>
        <label className="mx-2">
          Rate
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </label>
        <label className="mx-2">
          Time
          <input
            type="number"
            value={processingFee}
            onChange={(e) => setProcessingFee(e.target.value)}
          />
        </label>

        <input
          value={downPayment}
          onChange={updateEmi}
          type="range"
          min={0}
          max={cost}
          
        />

        <input value={emi}
          onChange={updateDownPayment}
          type="range"
          min={0}
          max={cost}/>

        <div className="">
          {time.map((t, i) => (
            <button
              className={`${selectedTime === t ? "bg-red-500 mx-5" : "mx-5"}`}
              key={i}
              type="button"
              onClick={() => setSelectedTime(t)}
            >
              {t}
            </button>
          ))}
        </div>
        <button className="my-2" type="submit">
          Calculate
        </button>
      </form>
    </div>
  );
};

export default EMI;
