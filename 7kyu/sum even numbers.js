/*
Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

Only numbers without decimals like 4 or 4.0 can be even.

The input is a sequence of numbers: integers and/or floats.
Examples

[4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
[]                               -->  0

function sumEvenNumbers(input) {
  // [...]
}
*/

// My Solution:
function sumEvenNumbers(input) {
	let res = 0

	input.forEach((num) => {
		if (num % 2 === 0) res += num
	})

	return res
}

// Bonus one liner:
const sumEvenNumbers = (num) =>
	num.reduce((acc, c) => (c % 2 === 0 ? acc + c : acc), 0)
