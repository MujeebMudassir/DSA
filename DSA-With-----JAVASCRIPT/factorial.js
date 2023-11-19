console.log("factorial");

function factorial(n) {
  let fac = 1;
  for (let i = n; i > 0; i--) {
    console.log(i);
    fac *= i;
    //     console.log((fac = i * (i - 1)));
  }
  return fac;
}

console.log(factorial(5));
