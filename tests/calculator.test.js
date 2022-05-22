const calculator = require("../src/calculator");

test("should add 2 numbers", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("should subtract 2 numbers", () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test("should multiply 2 numbers", () => {
  expect(calculator.multiply(4, 4)).toBe(16);
});

test("should divide 2 numbers", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});
