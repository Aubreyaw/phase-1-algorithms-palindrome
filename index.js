
function isPalindrome(word) {
 const reversedWord =  word.split("").reverse().join("");
  return(word === reversedWord);
  
}

isPalindrome("abba")

// Example usage:
const word = "racecar";
console.log(isPalindrome(word)); // true

const anotherWord = "hello";
console.log(isPalindrome(anotherWord)); // false

/* 
  I should be able to enter a word and have it return true if it reads the same forward or backward and false if it does not
  i will need to iterate over the letters in the word make an array?
  reverse the word? and compare
  how to reverse a string? 
String.prototype.split()  Array.prototype.reverse()  Array.prototype.join()
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
