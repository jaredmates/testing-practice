const analyzeArray = require("../src/analyzeArray");

test("should find average of array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test("should find min of array", () => {
  expect(analyzeArray([3, 9, 2]).min).toBe(2);
});

test("should find max of array", () => {
  expect(analyzeArray([1, 5, 4]).max).toBe(5);
});

test("should find length of array", () => {
  expect(analyzeArray([1, 3, 4]).length).toBe(3);
});
