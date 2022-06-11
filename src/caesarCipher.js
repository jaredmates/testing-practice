const alphabet = "abcdefghijklmnopqrstuvwxyz";
const cipher = "bcdefghijklmnopqrstuvwxyza";

function singleCipher(char) {
  const index = alphabet.indexOf(char);
  let cipherChar = cipher[index];
  return cipherChar;
}

function caesarCipher(str) {
  if (typeof str !== "string") {
    return "not a string!!";
  }

  let cipherText = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      cipherText += singleCipher(str[i]);
    } else {
      cipherText += " ";
    }
  }
  return cipherText;
}

module.exports = caesarCipher;
