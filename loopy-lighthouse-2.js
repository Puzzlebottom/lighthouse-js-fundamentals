const loopyLighthouse = (range, multiples, words) => {
  for (let i = range[0]; i <= range[1]; i++) {
    console.log(
      i % (multiples[0] * multiples[1]) === 0
        ? words[0] + words[1]
        : i % multiples[1] === 0
        ? words[1]
        : i % multiples[0] === 0
        ? words[0]
        : i
    );
  }
};
