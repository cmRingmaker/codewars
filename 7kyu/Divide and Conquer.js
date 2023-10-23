/*Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.

function divCon(x){

}
*/


// My Solution:
function divCon(x) {
  let nonstr = 0
  let str = 0

  for(let i = 0; i < x.length; i++) {
    if (typeof x[i] === 'number') {
      nonstr += x[i]
    } else {
      str += Number(x[i])
    }
  }
  
  return nonstr - str
}
