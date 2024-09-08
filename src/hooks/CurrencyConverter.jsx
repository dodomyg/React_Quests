import { useState } from "react";
import useApiCall from "./useApiCall";
import axios from "axios";

const CurrencyConverter = () => {
  const [res, setRes] = useState(null);
  const [amtData, setAmtData] = useState({
    amount: 0,
    from: "",
    to: "",
  });
  const { data, error, loading } = useApiCall(
    "https://api.frankfurter.app/currencies"
  );

  const convert = async () => {
    try {
      if (!amtData.amount || !amtData.from || !amtData.to) return;
      const resp = await axios.get(
        `https://api.frankfurter.app/latest?amount=${amtData.amount}&from=${amtData.from}&to=${amtData.to}`
      );
      setRes(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  const swapp = async () => {
    const temp = amtData.from;
    amtData.from = amtData.to;
    amtData.to = temp;
    convert();
  };

  //convert object to array
  if (!data) {
    return <h1>Loading...</h1>;
  }
  const currData = Object.entries(data);

  return (
    <div>
      <h1>Currency Converter</h1>

      <p>{loading && "Loading..."}</p>
      <p>{error && "Error"}</p>
      <div className="flex items-center justify-center p-5 gap-x-4">
        <select
          onChange={(e) => setAmtData({ ...amtData, from: e.target.value })}
        >
          <option>Convert</option>
          {currData &&
            currData.map((d, i) => (
              <option key={i} value={d[0]}>
                {d[1]}
              </option>
            ))}
        </select>
        <p onClick={swapp} className="cursor-pointer">
          Swap
        </p>
        <select
          onChange={(e) => setAmtData({ ...amtData, to: e.target.value })}
        >
          <option>Convert</option>
          {currData &&
            currData.map((d, i) => (
              <option key={i} value={d[0]}>
                {d[1]}
              </option>
            ))}
        </select>

        <input
          type="number"
          onChange={(e) => setAmtData({ ...amtData, amount: e.target.value })}
        />
        <button type="button" onClick={convert}>
          Convert
        </button>
      </div>
      {res !== null && (
        <p className="text-center my-2">
          {amtData?.amount} {amtData?.from} = {res?.rates[amtData?.to]}{" "}
          {amtData?.to}
        </p>
      )}
    </div>
  );
};

export default CurrencyConverter;
