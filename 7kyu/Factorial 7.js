/*Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial

function factorial(n){
  //your code here
}
*/


// My Solution:

function factorial(n){
  let res = 1
  
  for(let i = 1; i <= n; i++){
    res *= i
  }
  
  return res
}

// 
// 
// alternate factorial recursive function.. didn't use because it's significantly slower. But it's still fun to write recursion.

function factorial(n){
  if(n === 0 || n === 1) return 1
  return n * factorial(n - 1)
}
