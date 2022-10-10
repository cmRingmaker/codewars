/*Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

function sumMix(x){

}
*/

// My Solution:
function sumMix(x){
    let sum = x.map((x) => Number(x))
    return sum.reduce((acc, c) => acc + c, 0)
}
