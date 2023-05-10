/* A calculator object that contains functions for the basic operations: 
add, subtract, divide, and multiply. Each of these functions should take 
two numbers and return the correct calculation.*/

function calculator(n1, n2) {
  const obj = {
    sum() {
      return n1 + n2;
    },
    multiply() {
      return n1 * n2;
    },
    subtract() {
      return n1 - n2;
    },
    divide() {
      return n1 / n2;
    },
    // add more methods as needed
  };

  return obj;
}

module.exports = calculator;
