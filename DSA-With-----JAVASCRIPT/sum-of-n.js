function summation(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    console.log(sum, i);
    sum = sum + i;
  }
  return sum;
}

console.log(summation(10));
