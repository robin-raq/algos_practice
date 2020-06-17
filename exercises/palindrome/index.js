// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome1(str) {
  return str.toLowerCase().split("").reverse().join("") === str;
}

function palindrome2(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

function palindrome(str) {
  let arr = str.split("");
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    if (arr[left] !== arr[right]) return false;
    left++;
    right--;
  }
  return true;
}

module.exports = palindrome;
