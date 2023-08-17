/*You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
Examples

[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
  // Return a sorted array.
}
*/


// My Solution:

function sortArray(array) {
  const evens = []
  const odds = []
  const sorted = [] 
  
  // get evens and odds
  for(let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evens.push(array[i])
    } else {
      odds.push(array[i])
    }
  }

  // sort all odds lowest to highest
  odds.sort((a, b) => a - b)
  
  // push the first element of evens or odds to sorted, remove it from evens or odds. repeat.
  for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0) {
      sorted.push(evens.shift())
    } else {
      sorted.push(odds.shift())
    }
  }
  
  return sorted
}
