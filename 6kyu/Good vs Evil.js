/*
Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain worth when battling against others. On the side of good we have the following races, with their associated worth:

    Hobbits: 1
    Men: 2
    Elves: 3
    Dwarves: 3
    Eagles: 4
    Wizards: 10

On the side of evil we have:

    Orcs: 1
    Men: 2
    Wargs: 2
    Goblins: 2
    Uruk Hai: 3
    Trolls: 5
    Wizards: 10

Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.

Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.
Input:

The function will be given two parameters. Each parameter will be a string of multiple integers separated by a single space. Each string will contain the count of each race on the side of good and evil.

The first parameter will contain the count of each race on the side of good in the following order:

    Hobbits, Men, Elves, Dwarves, Eagles, Wizards.

The second parameter will contain the count of each race on the side of evil in the following order:

    Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.

All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.
Output:

Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.


function goodVsEvil(good, evil){

}
*/

// My Solution:
function goodVsEvil(good, evil) {
	let g = 0
	let e = 0

	good.split(' ').forEach((val, i) => {
		switch (i) {
			case 0:
				g += val * 1
				break // Hobbits
			case 1:
				g += val * 2
				break // Men
			case 2:
				g += val * 3
				break // Elves
			case 3:
				g += val * 3
				break // Dwarves
			case 4:
				g += val * 4
				break // Eagles
			case 5:
				g += val * 10
				break // Wizards
		}
	})

	evil.split(' ').forEach((val, i) => {
		switch (i) {
			case 0:
				e += val * 1
				break // Orcs
			case 1:
				e += val * 2
				break // Men
			case 2:
				e += val * 2
				break // Wargs
			case 3:
				e += val * 2
				break // Goblins
			case 4:
				e += val * 3
				break // Uruk-Hai
			case 5:
				e += val * 5
				break // Trolls
			case 6:
				e += val * 10
				break // Wizards
		}
	})

	if (g === e) return 'Battle Result: No victor on this battle field'

	return g > e
		? 'Battle Result: Good triumphs over Evil'
		: 'Battle Result: Evil eradicates all trace of Good'
}
