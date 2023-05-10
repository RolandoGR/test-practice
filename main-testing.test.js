const capitalize = require("./capitalize");
const reverseString = require("./reverseString");
const calculator = require("./calculator");
const caesar = require("./caesar");
const analyzeArray = require("./analyzeArray");

test("Capitalize", () => {
  expect(capitalize("fungus")).toBe("FUNGUS");
});

test("Check if string is reversed", () => {
  expect(reverseString("barco")).toBe("ocrab");
});

test("Checking calculator functions", () => {
  expect(calculator(5, 2).sum()).toBe(7);
  expect(calculator(5, 2).subtract()).toBe(3);
  expect(calculator(10, 2).divide()).toBe(5);
  expect(calculator(5, 6).multiply()).toBe(30);
});

test("Caesar ciphering 1 word", () => {
  expect(caesar("efgfoe")).toBe("defend");
});

test("Caesar ciphering with spaces", () => {
  expect(caesar("efgfoe uif fbtu xbmm pg uif dbtumf")).toBe(
    "defend the east wall of the castle"
  );
});

test("Caesar ciphering with letter 'a'", () => {
  expect(caesar("a")).toBe("z");
});

test("Analyze array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
