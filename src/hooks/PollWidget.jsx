import React, { useState } from "react";

const PollWidget = () => {
  const [vote, setVote] = useState({
    "PSG": 4,
    "Inter": 3,
  });
  const [show,setShow] = useState(false);
  const voteOnclick = (team) => {
    setVote((prev)=>({...prev,[team]: prev[team] + 1}));
    setShow(true);
  };

  return (
    <div className="flex items-center w-100 justify-center h-[50vh]">
      <div className="border border-black rounded-md p-2 w-[400px]">
        <h2 className="py-2 font-bold">Who is winning today ? </h2>

        <div className="flex flex-col gap-3 px-2">
          <button
            disabled={show}
            onClick={(e) => voteOnclick("PSG")}
            className={`p-1 w-full rounded-lg  text-start ${show ? "bg-green-200" : "bg-gray-100"}`}
          >
            <p>PSG<span>{show && vote.PSG}</span></p>
            
          </button>
          <button
            disabled={show}
            onClick={(e) => voteOnclick("Inter")}
            className={`p-1 w-full rounded-lg  text-start ${show ? "bg-green-200" : "bg-gray-100"}`}
          >
            <p>Inter<span>{show && vote.Inter}</span></p>
            <span>{show && vote.Inter}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PollWidget;
