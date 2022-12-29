/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  return 0;
}
*/

// My Solution:
function getCount(str) {
    let counter = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']
  
    for ( letter of str ) {
        if (vowels.includes(letter)) {
            counter++
        }
    }
    
    return counter  
}
