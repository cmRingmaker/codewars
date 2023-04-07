/*Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
  // code here
}
*/


// My Solution:
function findLongest(array) {
  let mostDigits = 0

  for (let i = 0; i < array.length; i++) {
    if (array[i].toString().length > mostDigits.toString().length) {
      mostDigits = array[i]
    }
  }

  return mostDigits
}
