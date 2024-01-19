import React, { useState } from "react";
import Box from "./Box";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));

  const [xTurn, setXTurn] = useState(true);

  const [color, setColor] = useState(null);

  const handleClick = (index) => {
    // console.log("clicked on", index);
    if (state[index] !== null) return;
    const copyBoard = [...state];
    copyBoard[index] = xTurn ? "X" : "O";
    const colorTemp = copyBoard[index] == "X" ? "white" : "orange-500";
    setColor(colorTemp);
    setState(copyBoard);
    setXTurn(!xTurn);
  };

  const checkWinner = () => {
    const winningOutcomes = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const set of winningOutcomes) {
      const [a, b, c] = set;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return true;
      }
    }
    return false;
  };

  const isWinner = checkWinner();
  const isTied = !state.includes(null) && !isWinner;

  return (
    <>
      {isTied ? (
        <div className="winSection shadow-xl px-10 pt-10 bg-gray-300 rounded-xl">
          <h2 className="font-bold text-blue-500 text-4xl">Match Tied!</h2>
          <button
            onClick={() => {
              setState(Array(9).fill(null));
              setXTurn(true);
            }}
            className="bg-gray-800 text-white text-xl rounded-lg p-3 m-6"
          >
            Restart
          </button>
        </div>
      ) : isWinner ? (
        <div className="winSection shadow-xl px-10 pt-10 bg-gray-300 rounded-xl">
          <h2 className="font-bold text-blue-500 text-4xl">
            {xTurn ? "O" : "X"} is winner
          </h2>
          <button
            onClick={() => {
              setState(Array(9).fill(null));
              setXTurn(true);
            }}
            className="bg-gray-800 text-white text-xl rounded-lg p-3 m-6"
          >
            Play Again
          </button>
        </div>
      ) : (
        <div className="container rounded-2xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] mt-10 overflow-hidden">
          <div className="row flex justify-center items-center">
            <Box
              onClick={() => handleClick(0)}
              value={state[0]}
              style={color}
            />
            <Box
              onClick={() => handleClick(1)}
              value={state[1]}
              style={color}
            />
            <Box
              onClick={() => handleClick(2)}
              value={state[2]}
              style={color}
            />
          </div>
          <div className="row flex justify-center items-center">
            <Box
              onClick={() => handleClick(3)}
              value={state[3]}
              style={color}
            />
            <Box
              onClick={() => handleClick(4)}
              value={state[4]}
              style={color}
            />
            <Box
              onClick={() => handleClick(5)}
              value={state[5]}
              style={color}
            />
          </div>
          <div className="row flex justify-center items-center">
            <Box
              onClick={() => handleClick(6)}
              value={state[6]}
              style={color}
            />
            <Box
              onClick={() => handleClick(7)}
              value={state[7]}
              style={color}
            />
            <Box
              onClick={() => handleClick(8)}
              value={state[8]}
              style={color}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Board;
