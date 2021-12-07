const calculator = {
  add(a, b) {
      if (a === null && b === null) return 'a and b are null';
    return a + b;
  },

  divide(a, b) {
    return a / b;
  },
  subtract(a, b) {
    return a - b;
  },

  multiply(a, b) {
    return a * b;
  },
};

module.exports = calculator;