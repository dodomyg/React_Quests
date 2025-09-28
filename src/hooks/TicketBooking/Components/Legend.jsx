import React from "react";

const Legend = () => {
  const seats = [
    { color: "bg-green-200", label: "VIP", price: "$250" },
    { color: "bg-red-200", label: "Premium", price: "$120" },
    { color: "bg-yellow-200", label: "Regular", price: "$50" },
    { color: "bg-gray-600", label: "Booked" },
    { color: "bg-blue-700", label: "Selected" },
  ];
  return (
    <div className="flex align-center justify-center gap-3 my-4">
      {seats?.map((i) => (
        <div className="flex items-center gap-x-2" key={i}>
          <div
            className={`w-6 h-6 border border-gray-400 rounded-md cursor-pointer appearance-none duration-200
            ${i?.color}`}
          ></div>
          <p>
            {i?.label} {i?.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Legend;
