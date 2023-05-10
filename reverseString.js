function reverseString(word) {
  word = word.split("").reverse().join("");
  return word;
}

module.exports = reverseString;
