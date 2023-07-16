/*Complete the solution so that the function will break up camel casing, using a space between words.
Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

// complete the function
function solution(string) {
    
}

*/


// My Solution:

//split all uppercase letters using regex
const solution = (string) => string.split(/(?=[A-Z])/).join(' ')
