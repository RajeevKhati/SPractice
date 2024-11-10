Function.prototype.myCall = function (obj, ...args) {
  const symbol = Symbol();
  obj[symbol] = this;
  obj[symbol](...args);
  delete obj[symbol];
};

Function.prototype.myApply = function (obj, args) {
  const symbol = Symbol();
  obj[symbol] = this;
  obj[symbol](...args);
  delete obj[symbol];
};

Function.prototype.myBind = function (obj) {
  const fn = this;
  return function (...args) {
    const symbol = Symbol();
    obj[symbol] = fn;
    obj[symbol](...args);
    delete obj[symbol];
  };
};

function test(val) {
  console.log(this.name, val);
}

const person = {
  name: "Peter",
};

test.call(person, "call");
test.myCall(person, "myCall");

test.apply(person, ["apply"]);
test.myApply(person, ["myApply"]);

const test1 = test.bind(person);
test1("bind");
const test2 = test.myBind(person);
test1("myBind");
