/*Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
  //Code here
}
*/


// My Solution:

function pigIt(str){
  let splitStr = str.split(' ')
  // regex to make sure the solution is ONLY applied to the alphabet, not symbols or numbers
  return splitStr.map((word) => /[a-zA-Z]+/.test(word) ? word.slice(1) + word[0] + 'ay' : word).join(' ')
}
