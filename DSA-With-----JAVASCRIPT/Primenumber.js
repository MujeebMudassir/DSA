function isPrime(n) {
  if (n < 2) {
    console.log("a");
    return false;
  }
  if (n % 2 === 0) {
    console.log("b");
    return false;
  }
  return true;
}

console.log(isPrime(9));
