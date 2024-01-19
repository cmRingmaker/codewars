/*Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

Ex:

274 -> '2-7-4'
6815 -> '68-1-5'

function dashatize(num) {
  return ""
}
*/


// My Solution:

function dashatize(num) {

  const str = num.toString()
  let dashed = ``

  for(const n in str) {
    (str[n] % 2 === 1)
      ? dashed += `-${str[n]}-`
      : dashed += str[n]
  }

  dashed = dashed.replace(/-(-)/g, '$1') // remove double dashes
  
  return dashed.replace(/^-|-$/g, '') // remove dashes from start and end
}
