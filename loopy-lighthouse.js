for (let i = 100; i <= 200; i++) {
  console.log(
    i % 12 === 0
      ? "LoopyLighthouse"
      : i % 4 === 0
      ? "Lighthouse"
      : i % 3 === 0
      ? "Loopy"
      : i
  );
}
