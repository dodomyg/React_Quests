import React, { useState } from "react";

const XandO = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState(null);
  const [winningCells,setWinnigCells] = useState([])
  const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const playTurn = (i, turn) => {
    const isBoardFull = board.every((cell) => cell !== null);
    if (board[i] !== null || winner || isBoardFull) return;
    if (turn === "X") {
      board[i] = "X";
      setTurn("O");
    } else {
      board[i] = "O";
      setTurn("X");
    }
    didgameFinish(board, turn);
  };

  const didgameFinish = (board) => {
    const newBoard = [...board];
    for (let i = 0; i < winningPattern.length; i++) {
      const [a, b, c] = winningPattern[i];
      if (
        newBoard[a] !== null &&
        newBoard[a] === newBoard[b] &&
        newBoard[b] === newBoard[c]
      ) {
        setWinner(newBoard[a]);
        setWinnigCells([a,b,c])
        newBoard[a] = turn;
        newBoard[b] = turn;
        newBoard[c] = turn;
      }
    }
  };
  return (
    <div className="w-full flex flex-col items-center justify-center h-[100vh]">
      <h1>X and O</h1>
      <div className="grid place-content-center place-items-center grid-cols-3 text-4xl border-2 border-black">
        {board?.map((b, i) => (
          <div
            onClick={(e) => playTurn(i, turn)}
            className={`${winningCells.includes(i) && `bg-green-500`} text-center border-b border-r border-2 p-5 w-[80px] h-[80px] ${winner ? "" : `hover:bg-gray-100`} border-black cursor-pointer`}
          >
            {turn === "X" ? (
              <span className="text-red-500">{b}</span>
            ) : (
              <span className="text-blue-500">{b}</span>
            )}
          </div>
        ))}
      </div>
      <h1 className="text-4xl">{winner ? "Winner is " + winner : null}</h1>
      <button onClick={()=>{
        setBoard(Array(9).fill(null))
        setTurn("X");
        setWinner(null)
        setWinnigCells([])
      }}>Reset</button>
    </div>
  );
};

export default XandO;
