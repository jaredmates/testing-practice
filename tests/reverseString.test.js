const reverseString = require("../src/reverseString");

test("should reverse a string", () => {
  expect(reverseString("hello")).toBe("olleh");
});
