const lastIndexOf = (array, targetNumber) => {
  let index = array.length - 1;

  while (index >= 0) {
    if (array[index] === targetNumber) return index;
    index--;
  }
  return index;
};
