function calc(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function memoize(fn) {
  let cache = {};
  return function (n) {
    if (cache[n]) {
      return cache[n];
    }
    let ans = calc(n);
    cache[n] = ans;
    return ans;
  };
}

const calculate = memoize(calc);
console.time();
console.log(calculate(10));
console.timeEnd();

console.time();
console.log(calculate(10));
console.timeEnd();
