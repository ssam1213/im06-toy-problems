/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

// var findMid = function(array, target){
//   var result = ''
//   var midIndex = Math.floor((array.length-1)/2);
//   if(array[midIndex]===target){
//     return midIndex
//   } else {

//   }
// }

var rotatedArraySearch = function (rotated, target) {
  // // Your code here:

  // var left = rotated[0]
  // var right = rotated[rotated.length-1];
  var midIndex = Math.floor((rotated.length-1)/2);
  var midElement = rotated[midIndex]

  if(midElement===target){
    return midIndex
  }

  if(rotated[target] < midIndex){
    // for(var i=0; i<midIndex; i++){
    //   if(rotated[i]===target){
    //     return i
    //   }
    // }
    var array1 = rotated.slice(0, midIndex)
    rotatedArraySearch(array1, target)
  }
  
  if(rotated[target] > midIndex){
    // for(var j=midIndex; j<=rotated[target]; j++){
    //   if(rotated[j]===target){
    //     return j
    //   }
    // }
    var array2 = rotated.slice(midIndex, rotated.length)
    console.log(array2);
    
    rotatedArraySearch(array2, target)
  }

    // var min = 0;
    // var max = rotated.length - 1;
    // while (min <= max) {
    //   var mid = Math.floor((min + max) / 2);
    //   if (rotated[mid] === target) {
    //     return mid;
    //   }
    //   //중간지점에서 끝지점까지의 정렬 검사
    //   if (rotated[mid] <= rotated[max]) {
    //     //타겟이 반대편에 있을 경우 -> 범위 변경
    //     if (target < rotated[mid] || target > rotated[max]) {
    //       max = mid - 1;
    //     } else {
    //       min = mid + 1;
    //     }
    //   }
    //   //처음지점에서 중간지점까지의 정렬 검사
    //   else if (rotated[mid] >= rotated[min]) {
    //     //타겟이 반대편에 있을 경우 -> 범위 변경
    //     if (target > rotated[mid] || target < rotated[min]) {
    //       min = mid + 1;
    //     } else {
    //       max = mid - 1;
    //     }
    //   }
    // }
    // return null;





};
var output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2)

console.log(output);

