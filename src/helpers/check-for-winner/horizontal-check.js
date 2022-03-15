const horizontalCheck = (state, valueToCheck) => {
  for (const row of state) {
    const fullRowOccupied = row.every((val) => val === valueToCheck);

    if (fullRowOccupied) {
      return true;
    }
  }
  return false;
};

export default horizontalCheck;
