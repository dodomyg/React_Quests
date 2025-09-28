import { useEffect, useState } from "react";
import { Suspense, lazy } from "react";
import Legend from "./Components/Legend";
import Summary from "./Components/Summary";

const LazySeats = lazy(() => import("./Components/Seats"));

const Main = () => {
  const [seats, _] = useState(108);
  const [checkedSeats, setCheckedSeats] = useState([]);

  const [alreadyTaken,setAlreadyTaken] = useState([])
  useEffect(() => {
  const stored = localStorage.getItem("checkedSeats");
  setAlreadyTaken(stored ? JSON.parse(stored) : []);
}, []);

  const handleSeatSelection = (seatNum) => {
    if (checkedSeats?.map((i) => i?.seatNo).includes(seatNum?.seatNo))
      setCheckedSeats(checkedSeats.filter((c) => c?.seatNo !== seatNum?.seatNo));
    else setCheckedSeats([...checkedSeats, seatNum]);
  };

  const bookSeats = ()=>{
    if(checkedSeats?.length===0)return alert("No seats selected");
    const prevSeats = JSON.parse(localStorage.getItem("checkedSeats")) || [];
    const updates  = [...prevSeats,...checkedSeats]
    localStorage.setItem("checkedSeats",JSON.stringify(updates))
    setCheckedSeats([])
  }

  return (
    <div className="flex flex-col items-center w-full p-3">
      <div className="text-xl font-bold text-center w-full mb-5">
        Ticket Booking
      </div>
      <button onClick={()=>setCheckedSeats([])} className="bottom-auto">
        Clear Selection
      </button>
      <div className="w-[72%] border border-black mt-5 p-1 rounded-md bg-gray-500"></div>

      <div>Screen</div>

      <Suspense fallback={<h1>Loading...</h1>}>
        <LazySeats alreadyTaken={alreadyTaken} checkedSeats={checkedSeats} handleSeatSelection={handleSeatSelection} seats={seats} />
      </Suspense>

      <Legend />

      <Summary bookSeats={bookSeats} checkedSeats={checkedSeats} />
    </div>
  );
};

export default Main;
