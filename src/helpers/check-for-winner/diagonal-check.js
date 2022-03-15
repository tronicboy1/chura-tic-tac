const diagonalCheck = (state, valueToCheck) => {
  const rowColumnLength = state[0].length;

  // diagonal check - forward
  {
    const flattenedLeftRightDiagonal = state.reduce(
      (prev, currentRow, rowIndex) => [...prev, currentRow[rowIndex]],
      []
    );

    const leftRightDiagonalOccupied = flattenedLeftRightDiagonal.every(
      (val) => val === valueToCheck
    );

    if (leftRightDiagonalOccupied) {
      return true;
    }
  }

  // diagonal check - backward
  {
    const flattenedRightLeftDiagonal = state.reduce(
      (prev, currentRow, rowIndex) => [
        ...prev,
        currentRow[rowColumnLength - rowIndex - 1], // must subtract 1 or error
      ],
      []
    );

    const rightLeftDiagonalOccupied = flattenedRightLeftDiagonal.every(
      (val) => val === valueToCheck
    );

    if (rightLeftDiagonalOccupied) {
      return true;
    }
  }

  return false;
};

export default diagonalCheck;
