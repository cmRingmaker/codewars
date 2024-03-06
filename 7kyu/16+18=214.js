/*For this kata you will have to forget how to add two numbers.

It can be best explained using the following meme:

Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.
Examples

  1 6           2 6
+ 1 8         + 3 9   
-------       -------
  2 14          5 15


  1 2  2
+   8  1
---------
  1 10 3


function add(num1, num2) {
  return num1 + num2;
}
*/


// My Solution:
function add(number1, number2) {

  let res = []

  const num1 = number1.toString().split('').reverse()
  const num2 = number2.toString().split('').reverse()
  const maxLen = Math.max(num1.length, num2.length)

  for(let i = 0; i < maxLen; i++) {
    res.push((+num1[i] || 0) + (+num2[i] || 0))
  }

  return +res.reverse().join('')
}
