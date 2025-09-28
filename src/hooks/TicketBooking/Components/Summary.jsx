import React from "react";

const Summary = ({ checkedSeats, bookSeats }) => {
  const totalCost =
    checkedSeats?.length > 0 &&
    checkedSeats?.reduce((acc, curr) => acc + curr?.cost, 0);
  const seats = checkedSeats?.length > 0 && checkedSeats?.map((i) => i?.seatNo);
  return (
    <div className="w-[70%] mt-3">
      <span>Selected Seats :</span>
      <div className="bg-yellow-400 rounded-md">
        {seats?.length > 0 && seats?.join(",")}
      </div>
      <div>Total Cost : {totalCost}</div>
      {checkedSeats?.length > 0 && (
        <button onClick={bookSeats} className="bg-red-500 text-white p-2 rounded-md">
          Book {checkedSeats?.length}
        </button>
      )}
    </div>
  );
};

export default Summary;
