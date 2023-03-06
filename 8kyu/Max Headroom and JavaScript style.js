/*Shouldn't the two functions getMax1 and getMax2 be equivalent and return the same value? Can you spot a problem and fix it? Can you learn something about JavaScript style in this kata?

function getMax1()
{
  var max = 
  {
   name: 'Max Headroom'
  }
  return max;
}

function getMax2()
{
  return
  {
    name: 'Max Headroom'
  }
}

*/


// My Solution:

// using parseInt() on our hex, we set the radix to 16 since there are 16 hexadecimal digits
const getMax1 = () => ({ name: 'Max Headroom' })
const getMax2 = () => ({ name: 'Max Headroom' })
