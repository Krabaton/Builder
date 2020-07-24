const sum = (a, b = 6) => a + b

const square = (b) => {
  return b * b
}

const variable = 8

/**
 *
 *
 * @class MyClass
 */
class MyClass {
  constructor(credentials) {
    this.name = credentials.name
    this.enrollmentNo = credentials.enrollmentNo
  }
  getName() {
    return this.name
  }
}

export { sum, square, variable, MyClass }
