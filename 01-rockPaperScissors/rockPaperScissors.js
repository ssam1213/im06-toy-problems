/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/


var rockPaperScissors = function () {
 // TODO: your solution here
 var result = [];
 var rps = ['rock', 'paper', 'scissors'];
 var newArray = [];
 for(var i = 0; i<3; i++){
   for(var j = 0; j<3; j++){
     for(var k = 0; k<3; k++){
       newArray.push(rps[i]);
       newArray.push(rps[j]);
       newArray.push(rps[k]);
       result.push(newArray);
       newArray=[];
     }
   }
 }
 return result;
};

console.log(rockPaperScissors());

  //

  // var container = [];
  // var newArray = [];
  // var cases = ['rock'. 'paper', 'scissors']
  // for(var i=0; i<cases.length; i++){
  //   var number = Math.floor(Math.random() * (3));
  //   newArray.push(cases[number]);
  //   console.log(number);
  // }
  // console.log(newArray);

  // function rcp (array, value){
  //   if(newArray[0]==='rock'){
  //
  //
  //   }
  //   console.log('newArray', newArray);
  //   if(newArray[0]==='paper'){
  //
  //   }
  //   if(newArray[0]==='scissors'){
  //
  //   }
  //   return newArray;
  // }
  // rcp(newArray);
  //
  // return container;

// };

/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function (string) {
  // TODO: your solution here
  for(var i=0; i<string.length; i++){
      if(string.indexOf(string[i])===string.lastIndexOf(string[i])){
        return string[i];
      }
  }

};

console.log(firstNonRepeatedCharacter('AACBDB'));
