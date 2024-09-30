/*
Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12)    --> should return "10 + 2"
expandedForm(42)    --> should return "40 + 2"
expandedForm(70304) --> should return "70000 + 300 + 4"

NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
  // Your code here
}
*/

// My Solution:
function expandedForm(num) {
	const str = num.toString()
	const res = []

	for (let i = 0; i < str.length; i++) {
		if (str[i] !== '0') {
			const place = Math.pow(10, str.length - i - 1)

			res.push(+str[i] * place)
		}
	}

	return res.join(' + ')
}
