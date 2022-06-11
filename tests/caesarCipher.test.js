const caesarCipher = require("../src/caesarCipher");

test("'defend the east wall of the castle' becomes 'efgfoe uif fbtu xbmm pg uif dbtumf'", () => {
  const plainText = "defend the east wall of the castle";
  const cipherText = "efgfoe uif fbtu xbmm pg uif dbtumf";

  expect(caesarCipher(plainText.toLowerCase())).toBe(cipherText.toLowerCase());
});

test("z becomes a", () => {
  const plainText = "z";
  const cipherText = "a";

  expect(caesarCipher(plainText.toLowerCase())).toBe(cipherText.toLowerCase());
});
