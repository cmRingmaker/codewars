/*This function should return an object, but it's not doing what's intended. What's wrong?

function mystery() {
  var results =
    {sanity: 'Hello'};
  return
    results;
}
*/

// My Solution:
function mystery() {
    const results = {
        sanity: 'Hello'
    }
    return results
}
