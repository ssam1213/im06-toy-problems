/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */

var binarySearch = function (array, target) {

var midMemo = 0
    
    function find (array, target){
        var min = 0;
        var max = array.length - 1; 
        var mid = Math.floor((min + max) / 2);  
          midMemo += mid
          if(target>array[mid]){
            if(array[mid]===target){  
                return mid 
            } else {
                return find(array.slice(array[mid]-1), target)   
            }
          }
          if(target<array[mid]){
              array = array.reverse();
            if(array[mid]===target){  
                return mid 
            } else {
                return find(array.slice(array[mid]-1, mid-max), target)   
            }
          }
    }

    find(array, target)
    return midMemo

}


var index = binarySearch([1, 2, 3, 4, 5], 4);
var index2 = binarySearch([1, 2, 3, 4, 5], 2);
//5,4,3,2,1
console.log(index); // [3]
console.log(index2);