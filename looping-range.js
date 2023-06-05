const range = (start, end, step) => {
  let result = [];
  if (start === undefined || end === undefined || step === undefined) {
    return result;
  } else if (start > end) {
    return result;
  } else if (step <= 0) {
    return result;
  } else {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
    return result;
  }
};

console.log(range(0, 8, 2));
