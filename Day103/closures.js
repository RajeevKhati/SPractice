function outer() {
  let arrFn = [];
  for (var i = 0; i < 3; i++) {
    arrFn.push(function fn() {
      console.log(i);
    });
  }
  return arrFn;
}
let arrFn = outer();
arrFn[0](); //3
arrFn[1](); //3
arrFn[2](); //3

/*
    Changing var to let will print 0,1,2 as output.
    Explanation:
        Using var:

        1. When you declare i with var, i is scoped to the entire outer function.
        2. This means there’s only one i shared across all iterations of the loop.
        3. When each function (fn) is added to arrFn, it remembers the reference to this one shared i variable.
        4. By the time you actually call the functions (after the loop is done), i has reached 3. So all three functions in arrFn log the current value of i, which is now 3.

        Using let:

        1. When you declare i with let, i is scoped to each individual loop iteration.
        2. This means each iteration gets its own separate i variable with the value for that iteration.
        3. When each function (fn) is added to arrFn, it "remembers" the i from its own iteration, so they retain the values 0, 1, and 2 independently.
        4. Therefore, when you call arrFn[0](), arrFn[1](), and arrFn[2](), they each log their own i value from their respective loop iterations.

*/
