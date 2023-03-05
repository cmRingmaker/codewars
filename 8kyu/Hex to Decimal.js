/*Complete the function which converts hex number (given as a string) to a decimal number.

function hexToDec(hexString){
  //your code here
}
*/


// My Solution:

// using parseInt() on our hex, we set the radix to 16 since there are 16 hexadecimal digits
const hexToDec = hex => parseInt(hex, 16)
