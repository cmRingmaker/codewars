/*Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  // your code here
}
*/

// My Solution:
function isPalindrome(x) {
    let reverse = x.split('').reverse().join('')
    return x.toLowerCase() === reverse.toLowerCase()
}