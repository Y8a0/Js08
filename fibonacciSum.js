function fibonacciSum() {
  let sum = 0;
  let S1 = 1;
  let i = 2;
  while (i <= 4000000) {
    if (i % 2 === 0) {
      sum += i;
    }
    const next = S1 + i;
    S1 = i;
    i = next;
  }
  return sum;
}

console.log(fibonacciSum());

module.exports = fibonacciSum;