/*Functional closures can get overly attached. Set them straight!

Why doesn't greet_abe() actually greet Abe?


var name = 'Abe';
var greet_abe = function() {
  return "Hello, " + name + '!';
};
name = 'Ben';
var greet_ben = function() {
  return "Hello, " + name + '!';
};
*/


// My Solution:
function greet_abe() {
  return 'Hello, Abe!'
}

function greet_ben() {
  return 'Hello, Ben!'
}
