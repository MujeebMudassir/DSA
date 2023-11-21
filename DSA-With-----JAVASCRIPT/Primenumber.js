function isPrime(n) {
  if (n < 2) {
    console.log("a");
    return false;
  }
  if (n % 2 === 0) {
    console.log("b");
    return false;
  }
  console.log("c");
  return true;
}

console.log(isPrime(9));
console.log(isPrime(73));
console.log(isPrime(89));
