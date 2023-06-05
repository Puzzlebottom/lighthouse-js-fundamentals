const moveDeltas = {
  north: [0, 1],
  south: [0, -1],
  east: [1, 0],
  west: [-1, 0],
};

const finalPosition = (moves) => {
  let result = [0, 0];
  for (let move of moves) {
    let moveDelta = moveDeltas[move];
    let x = (result[0] += moveDelta[0]);
    let y = (result[1] += moveDelta[1]);
    result = [x, y];
  }
  return result;
};
