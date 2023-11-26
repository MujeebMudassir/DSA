let arr = [1, 2, 6, 32, 6, 78, 2];

// function largest(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   let min = max;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return `max number ${max} min number ${min}`;
// }

// brute force
function largest(arr) {
  arr.sort((a, b) => a - b);
  let max = arr[arr.length - 1];
  let min = arr[0];

  return `max number ${max} min number ${min}`;
}

console.log(largest(arr));
