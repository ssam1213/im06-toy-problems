/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  // TODO: everything
  var result = 1;
  var newArray = array.sort(function(a, b) {
    return a - b;
  });
  console.log(newArray);
  
  for(var i=1; i<array.length; i++){
    result *= array[i];
  }
  return result
};

// var output = largestProductOfThree([2, 1, 3, 7]) 
var output = largestProductOfThree([9,7,8,5]) 
console.log(output);

