/*An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
Examples

    "foefet" is an anagram of "toffee"

    "Buckethead" is an anagram of "DeathCubeK"


// write the function isAnagram
var isAnagram = function(test, original) {
};

*/


// My Solution:

function isAnagram(test, original) {
  //use toLowerCase() because different casings have different unicode values, meaning sort will not have expected outputs!
  let tSort = test.toLowerCase().split('').sort().join('')
  let oSort = original.toLowerCase().split('').sort().join('')

  return tSort === oSort
}
