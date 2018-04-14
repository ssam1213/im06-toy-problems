/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str){
var result = [];
    count = 0
var possibleI = Math.pow(2, str.length)
  function find (str) {
    count++
    for(var i=0; i<possibleI; i++){
        temp = ""
        for( var j=0; j<str.length; j++){ 
            if(count<=possibleI){            
                temp +=str[j] 
                result.push(temp)                       
            }
        }
    }
  }
  find(str);
  return result
}

var output = powerSet("abc");

console.log(output);
