export const isFib = (number) => {
  const fib = [0, 1];

  let nextFib = null;
  for (let i = 0; nextFib < number; i++) {
    nextFib = fib[i] + fib[i + 1];
    fib.push(nextFib);
  }

  return fib.includes(number);
};
