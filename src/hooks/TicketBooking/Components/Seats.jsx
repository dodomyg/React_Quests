import React, { useEffect, useState } from "react";

const Seats = ({ seats, handleSeatSelection, checkedSeats, alreadyTaken }) => {
  let currentRow = -1;
  const takenSeatNos = alreadyTaken?.map((i) => i?.seatNo) || [];
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-12  gap-3 my-10">
        {Array(seats)
          .fill(1)
          .map((_, i) => {
            const isRowStart = i % 12 === 0;

            if (isRowStart) currentRow++;

            const rowLabel = String.fromCharCode(65 + currentRow);
            const seatNumber = i % 12;

            const seatId = `${rowLabel}${seatNumber}`;
            const isDisabled = takenSeatNos.includes(seatId);
            const isChecked = checkedSeats?.some((s) => s.seatNo === seatId);
            return (
              <div
                key={`${rowLabel}${seatNumber}${i}`}
                className={`relative flex items-center justify-center`}
              >
                {isRowStart ? (
                  <span className="text-xs font-bold">{rowLabel}</span>
                ) : (
                  <div className={`relative`}>
                    <input
                      type="checkbox"
                      disabled={isDisabled}
                      checked={isChecked}
                      onChange={() =>
                        handleSeatSelection({
                          seatNo: seatId,
                          cost:
                            i < seats / 3
                              ? 50
                              : i < (2 * seats) / 3
                              ? 120
                              : 250,
                        })
                      }
                      className={`w-6 h-6 border border-gray-400 rounded-md cursor-pointer appearance-none checked:bg-blue-500 transition-colors duration-200 ${
                        isDisabled ? "bg-gray-600 cursor-not-allowed" : ""
                      } ${
                        i < seats / 3
                          ? "bg-green-200"
                          : i < (2 * seats) / 3
                          ? "bg-yellow-200"
                          : "bg-red-200"
                      }`}
                    />

                    <label
                      htmlFor={`seat-${i}`}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    >
                      {i % 12}
                    </label>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default React.memo(Seats);
