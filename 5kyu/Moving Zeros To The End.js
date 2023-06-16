/*Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  return
}
*/


// My Solution:

function moveZeros(arr) {
  
  let diffArr = []
  let zeroArr = []
  
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroArr.push(arr[i])
    } else if (arr[i] !== 0) {
      diffArr.push(arr[i])
    }
    
  }
  
  return diffArr.concat(zeroArr)  
}
