/*
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.
Examples

[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr){
//Your Code logic should written here
}
*/

// My Solution:
function highestRank(arr) {
	const hash = {}
	let freq = 0
	let res = 0

	for (const num of arr) {
		hash[num] = (hash[num] || 0) + 1

		if (hash[num] > freq || (hash[num] === freq && num > res)) {
			freq = hash[num]
			res = num
		}
	}

	return res
}
