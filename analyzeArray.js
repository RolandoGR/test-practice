/*An analyzeArray function that takes an array of numbers 
and returns an object with the following properties: average, 
min, max, and length.*/

function analyzeArray(array) {
  const analyzedArray = {
    average: getAverage(array),
    min: getMin(array),
    max: getMax(array),
    length: array.length,
  };

  return analyzedArray;
}

function getAverage(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  let average = sum / array.length;
  return average;
}

function getMin(array) {
  return Math.min(...array);
}

function getMax(array) {
  return Math.max(...array);
}

getAverage([1, 8, 3, 4, 2, 6]);
console.log(analyzeArray([1, 8, 3, 4, 2, 6]));
module.exports = analyzeArray;
