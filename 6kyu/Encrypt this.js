/*Description:

Encrypt this!

    Your message is a string containing space separated words.
    You need to encrypt each word in the message using the following rules:
        The first letter must be converted to its ASCII code.
        The second letter must be switched with the last letter
    Keepin' it simple: There are no special characters in the input.

Examples:

encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"

var encryptThis = function(text) {
  // Implement me! :)
}
*/


// My Solution:

function encryptThis(text) {
  const splitter = text.split(' ')
  let str = ''

  // father forgive me for what I'm about to do
  for(let i = 0; i < splitter.length; i++) {
    if(splitter[i].length === 1) {
      str += splitter[i].charCodeAt(0) + ' '
    } else if(splitter[i].length < 3) {
      str += splitter[i].charCodeAt(0) + splitter[i].slice(-1) + ' '
    } else {
      str +=  splitter[i].charCodeAt(0)   +
              splitter[i].slice(-1)       +
              splitter[i].slice(2, -1)    +
              splitter[i].slice(1, 2)     + ' ' 
    }
  }

  return str.trim()
}
