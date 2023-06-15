/*Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){

}
*/


// My Solution:

function toCamelCase(str) {
  //guard clause 
  if (str === '') return ''
  
  //split anything that isn't a letter or number.. so we split at every symbol
  const strArr = str.split(/[^a-zA-Z0-9]/)
  const casingType = strArr[0] === strArr[0].toLowerCase() ? 'camelCase' : 'PascalCase'
  
  return strArr.map((el, ind) => {
    if (ind === 0 && casingType === 'camelCase') {
      // 0 index word being lowercase means we want to keep it lowercase
      return el[0].toLowerCase() + el.slice(1)
    }
    
    // default turn everything into PascalCase
    return el[0].toUpperCase() + el.slice(1)
  }).join('')
  
}
