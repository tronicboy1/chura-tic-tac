const verticalCheck = (state, valueToCheck) => {
  const rowColumnLength = state[0].length;

  for (let columnInd = 0; columnInd < rowColumnLength; columnInd++) {
    const flattenedColumn = state.reduce(
      (prev, currentRow) => [...prev, currentRow[columnInd]],
      []
    );
    const fullColumnOccupied = flattenedColumn.every(
      (val) => val === valueToCheck
    );
    if (fullColumnOccupied) {
      return true;
    }
  }
  return false;
};

export default verticalCheck;
