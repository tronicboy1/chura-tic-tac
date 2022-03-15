import diagonalCheck from "./diagonal-check";
import horizontalCheck from "./horizontal-check";
import verticalCheck from "./vertical-check";

const checkForWinner = (boardState) => {
  const valueState = boardState.reduce((prev, currentRow) => {
    const rowWithValue = currentRow.map((tile) => tile.value);
    return [...prev, rowWithValue];
  }, []);

  // check for X then O
  for (const valueToCheck of ["X", "O"]) {
    if (horizontalCheck(valueState, valueToCheck)) return valueToCheck;

    if (verticalCheck(valueState, valueToCheck)) return valueToCheck;

    if (diagonalCheck(valueState, valueToCheck)) return valueToCheck;
  }
  return false;
};
export default checkForWinner;
