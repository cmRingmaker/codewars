/*
Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("");

† Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.

function firstNonRepeatingLetter(s) {
  // Add your code here
}
*/

// My Solution:
function firstNonRepeatingLetter(str) {
	if (str.length <= 1) return str

	let hash = {}

	for (const s of str) {
		const lower = s.toLowerCase()
		hash[lower] = (hash[lower] || 0) + 1
	}

	for (const s of str) {
		if (hash[s.toLowerCase()] === 1) return s
	}

	return ''
}
