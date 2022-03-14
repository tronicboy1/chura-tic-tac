import React, { useState } from "react";
import "./index.css";

function App() {
  const [boardState, setBoardState] = useState([
    [
      { value: "-", key: "a1" },
      { value: "-", key: "a2" },
      { value: "-", key: "a3" },
    ],
    [
      { value: "-", key: "b1" },
      { value: "-", key: "b2" },
      { value: "-", key: "b3" },
    ],
    [
      { value: "-", key: "c1" },
      { value: "-", key: "c2" },
      { value: "-", key: "c3" },
    ],
  ]);
  const [player, setPlayer] = useState("X");

  const handleBoardClick = (rowIndex, columnIndex) => {
    if (boardState[rowIndex][columnIndex].value === "-") {
      setBoardState((prev) => {
        const newBoardState = Array(...prev);
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

  return (
    <div>
      <h1>Current Player: {player}</h1>
      <tbody>
        {boardState.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((column, columnIndex) => (
              <td
                onClick={() => handleBoardClick(rowIndex, columnIndex)}
                key={column.key}
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
