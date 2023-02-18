function primeSum(n) {
    var isPrime = [];
  for (var i = 2; i < n; i++) {
    isPrime[i] = true;
  }
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (isPrime[i]) {
      for (var j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }
    var total = 0;
  for (var i = 2; i < n; i++) {
    if (isPrime[i]) {
      total += i;
    }
  }
  return total;
}
console.log(primeSum(2000000));

module.exports = primeSum;