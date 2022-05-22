const capitalize = require("../src/capitalize");
// import capitalize from './capitalize';
test("should capitalize first letter of string", () => {
  expect(capitalize("hello")).toBe("Hello");
});

// test is a string
// test first letter is capital
