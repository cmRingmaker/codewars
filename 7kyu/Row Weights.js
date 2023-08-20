/*Scenario

Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
Task

Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
Notes

    Array size is at least 1.
    All numbers will be positive.

function rowWeights(array){
  //your code here
}
*/


// My Solution:

function rowWeights(array){
  const team1 = []
  const team2 = []
  
  for(let i = 0; i < array.length; i++) {
    if(i % 2 === 0) {
      team1.push(array[i])
    } else {
      team2.push(array[i])
    }
  }
  
  const team1weight = team1.reduce((acc, c) => acc + c, 0)
  const team2weight = team2.reduce((acc, c) => acc + c, 0)
  
  return [team1weight, team2weight]
}
