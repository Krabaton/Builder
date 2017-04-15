// var second = function() {
//   console.log('works Second module!');
// };
// var first = function() {
//   console.log('works Second module!!!');
// };

// module.exports = {
//   func1: first,
//   func2: second
// };

var sum = (a, b = 6) => (a + b);

var square = (b) => {
  return b * b;
};

var variable = 8;

class MyClass {
  constructor(credentials) {
      this.name = credentials.name;
      this.enrollmentNo = credentials.enrollmentNo;
    }
  getName() {
      return this.name;
    }
}

export { sum, square, variable, MyClass };
