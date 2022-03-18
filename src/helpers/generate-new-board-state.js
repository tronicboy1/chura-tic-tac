const generateRandomId = () => Math.random().toString(36).slice(2);

const generateRow = (dimension) =>
  new Array(dimension)
    .fill(null)
    .map((_) => ({ key: generateRandomId(), value: "-" })); // 初期値に-を入れる

const generateNewBoardState = (dimension) => {
  if (dimension < 3) throw Error("dimenstion setting cannot be less than 3");

  return new Array(dimension).fill(null).map((_) => generateRow(dimension));
};

export default generateNewBoardState;
