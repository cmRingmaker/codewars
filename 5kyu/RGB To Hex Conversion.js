/*The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3

function rgb(r, g, b){
  // complete this function  
}
*/


// My Solution:

function getRGB(val) {
  //hexadecimal is a Base 16 numbering system, we fill an array with all hex values, each one representing a digit 0-15
  const hexTable = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F' ]
  
  if (val < 0) return '00'    //checks to make sure we stay within valid RGB values
  if (val > 255) return 'FF'  //anything lower or higher defaults to min/max
  
  let hex1 = Math.floor(val / 16)       //get whole number of the value to find its hex respresentation
  let hex2 = ((val / 16) - hex1) * 16   //get fractional number of the value then multiply by 16 to find its hex representation
  
  return hexTable[hex1] + hexTable[hex2]
}

// give me values and I give you your hex!
const rgb = (r, g, b) => `${getRGB(r)}${getRGB(g)}${getRGB(b)}`
