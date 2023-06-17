/*A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
  //...
}
*/


// My Solution:

function isPangram(string) {
  let upper = string.toUpperCase()
  
  // using ASCII codes for A-Z, we check if every letter is present
  for (let i = 65; i <= 90; i++) {
    if (!upper.includes(String.fromCharCode(i)))
      return false
  }

  return true
}
