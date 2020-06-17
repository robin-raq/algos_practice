// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Common variations:
// string has any repeated characters?
// does string A have the same characters as string B(anagram)

function maxChar(str) {
  let max = 0;
  let maxVal = "";
  const charMap = {};

  for (let char of str.toLowerCase()) {
    charMap[char] = charMap[char]++ || 1;
  }
  console.log(charMap);
  for (let key in charMap) {
    if (charMap[key] > max) {
      max = charMap[key];
      maxVal = key;
    }
  }
  return maxVal;
}

module.exports = maxChar;
