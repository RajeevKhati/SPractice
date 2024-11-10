let arr = [1, 2, 3, 4, [10, 12], 5, 6];
// spreadArray now contains the same elements as arr, but it's a new array with a separate reference.
let spreadArray = [...arr];
spreadArray[2] = 100;
spreadArray[4][1] = 300;
console.log("outputs ", spreadArray, arr);
