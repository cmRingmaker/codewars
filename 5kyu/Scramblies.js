/*Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

    Only lower case letters will be used (a-z). No punctuation or digits will be included.
    Performance needs to be considered.

Examples

scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
  return false;
}
*/

// My Solution:

function scramble(str1, str2) {
	const hash1 = {}
	const hash2 = {}

	// count occurences in str1
	for (const letter of str1) {
		hash1[letter] = (hash1[letter] || 0) + 1
	}

	// count occurences in str2
	for (const letter of str2) {
		hash2[letter] = (hash2[letter] || 0) + 1
	}

	// compare str1 having the same amount of letters as str2
	for (const letter in hash2) {
		if (!hash1[letter] || hash1[letter] < hash2[letter]) return false
	}

	return true
}
