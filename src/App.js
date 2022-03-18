import React, { useState, useEffect } from "react";
import checkForWinner from "./helpers/check-for-winner";
import generateNewBoardState from "./helpers/generate-new-board-state";
import "./index.css";

function App() {
  const [dimension, setDimension] = useState(3);
  const [boardState, setBoardState] = useState(() =>
    generateNewBoardState(dimension)
  );
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const winnerCalc = checkForWinner(boardState);
    if (winnerCalc) {
      console.log(winnerCalc);
      setWinner(winnerCalc);

      setTimeout(() => {
        setBoardState(generateNewBoardState(dimension));
        setWinner(null);
      }, 3000);
    }
  }, [boardState]);

  useEffect(() => {
    setBoardState(generateNewBoardState(dimension));
  }, [dimension]);

  const handleBoardClick = (rowIndex, columnIndex) => {
    if (boardState[rowIndex][columnIndex].value === "-") {
      setBoardState((prev) => {
        const newBoardState = prev.map((row) =>
          row.map((tile) => ({ ...tile }))
        );
        newBoardState[rowIndex][columnIndex].value = player;
        return newBoardState;
      });
      setPlayer((prev) => {
        if (prev === "X") {
          return "O";
        }
        if (prev === "O") {
          return "X";
        }
      });
    }
  };

  const handleInput = (event) => {
    if (Number(event.target.value) > 2) {
      setDimension(Number(event.target.value));
    }
  };

  return (
    <div>
      <h1>
        {winner ? `${winner} won the game!!` : `Current Player: ${player}`}
      </h1>
      <input type="number" onChange={handleInput} value={dimension} />
      <tbody>
        {boardState.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((column, columnIndex) => (
              <td
                onClick={() => handleBoardClick(rowIndex, columnIndex)}
                key={column.key}
                id={column.key}
              >
                {column.value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </div>
  );
}

export default App;
