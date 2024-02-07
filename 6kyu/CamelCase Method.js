/*Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.
Examples (input --> output):

"hello case" --> "HelloCase"
"camel case word" --> "CamelCaseWord"

String.prototype.camelCase=function(){
  //your code here
}
*/


// My Solution:

String.prototype.camelCase=function(){
  let str = this.split(' ')
  let words = ''
  
  for(let i = 0; i < str.length; i++) {
    words += str[i].charAt(0).toUpperCase() + str[i].slice(1)
  }
  
  return words
}
